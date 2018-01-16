const router = require('express').Router()
const {Review, User} = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
  Review.findAll({where: {productId: req.params.id}, include: [User]})
    .then(reviews => res.json(reviews))
    .catch(next)
})
