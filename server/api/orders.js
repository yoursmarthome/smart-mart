const router = require('express').Router()
const {Order, LineItem, Product} = require('../db/models')
const nodemailer = require('nodemailer')
module.exports = router

router.get('/:id', (req, res, next) => {
//   LineItem.findAll({
//     include: [{model: Order,
//        where: ({userId: req.params.id})
//       }]})
//   .then((order) => res.json(order))
//   .catch(next)
// })


  Order.findAll({
    where:
      {userId: req.params.id},
      include: [{model: LineItem, include: [Product] }]

  })
    .then((order) => res.json(order))
    .catch(next)
})


router.post('/', (req, res, next) => {
  console.log(req.body.cart)
  let cartAmount = req.body.cart.total *100

  let lineItems = []
  req.body.cart.myCart.forEach(item => {
    console.log(item)
    lineItems.push({productId: item.id, quantity: item.quantity})
  })
  const orderData = req.body.checkout
  orderData.lineItems = lineItems
  const userId = req.body.user.id
  if (userId) {
    orderData.userId = userId
  }
  console.log(orderData)

  var stripe = require("stripe")("sk_test_kzTrRvfkJwIqeqdHXbuNQYHj");

  // // Token is created using Checkout or Elements!
  // // Get the payment token ID submitted by the form:
  var token = req.body.token; // Using Express
  console.log('token before stripe create', token)
  // Charge the user's card:
  new Promise ((resolve, reject) => {
    stripe.charges.create({
      amount: cartAmount,
      currency: "usd",
      description: "Example charge",
      source: token,
    }, function(err, charge) {
      if (err) return reject(err)
      else return resolve()
    });
  })
    .then(() => {
      console.log('line Item', LineItem)
      Order.create(orderData, {include: LineItem})
    })
    .then(() => {
      nodemailer.createTestAccount((err, account) => {
        console.log('hit nodemailer')
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
              host: 'smtp.ethereal.email',
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                  user: account.user, // generated ethereal user
                  pass: account.pass  // generated ethereal password
              }
          });

          // setup email data with unicode symbols
          let mailOptions = {
              from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
              to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
              subject: 'Hello ✔', // Subject line
              text: 'Hello world?', // plain text body
              html: '<b>Hello world?</b>' // html body
          };

          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message sent: %s', info.messageId);
              // Preview only available when sending through an Ethereal account
              console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          });
      })
      .catch(next)
    })
})
