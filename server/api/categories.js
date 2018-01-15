const router = require('express').Router()
const {Category, Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Product.findAll({where: {id: req.params.id}})
    .then(products => res.json(products))
    .catch(next)
})
