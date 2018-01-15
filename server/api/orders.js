const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  // console.log('req.body', req.body);
  // Process Stripe payment using token

  // Create an Order with associated line items

  // Order.create(req.body)
  //   .then(order => res.json(order))
  //   .catch(next)

  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  
  
  
  var stripe = require("stripe")("sk_test_kzTrRvfkJwIqeqdHXbuNQYHj");

  // // Token is created using Checkout or Elements!
  // // Get the payment token ID submitted by the form:
  var token = req.body.token; // Using Express
  console.log('token before stripe create', token)
  // Charge the user's card:
  new Promise ((resolve, reject) => {
    stripe.charges.create({
      amount: 1000,
      currency: "usd",
      description: "Example charge",
      source: token,
    }, function(err, charge) {
      if (err) return reject(err)
      else return resolve()
    });
  })
    .then(() => {
      // pass cart items down to here
      // order.create, include line items
    })
})
