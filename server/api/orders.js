const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  console.log(req);
  // Process Stripe payment using token

  // Create an Order with associated line items

  // Order.create(req.body)
  //   .then(order => res.json(order))
  //   .catch(next)
})
