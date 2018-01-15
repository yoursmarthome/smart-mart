const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

// Returns all products

router.get('/:term', (req, res, next) => {
  Product.findAll({where: {name: {
    $ilike: '%' + req.params.term + '%'
  }}})
    .then(products => res.json(products))
    .catch(next)
})
