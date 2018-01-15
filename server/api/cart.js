const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/:ids', (req, res, next) => {

  const idArray = req.params.ids.split(',');
  let findArray = [];
  let productsArray = [];

  idArray.forEach(id => {
    findArray.push(Product.findOne({where: {id: id}})
    .then(product => {
      productsArray.push(product)
    }))
  })

  Promise.all(findArray)
  .then(() => res.send(productsArray))
})
