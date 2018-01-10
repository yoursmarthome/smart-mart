const Sequelize = require('sequelize')
const db = require('../db')

const LineItem = db.define('lineItem', {
  price: {
    type: Sequelize.VIRTUAL,

  }
  //calculated
})

module.exports = LineItem
