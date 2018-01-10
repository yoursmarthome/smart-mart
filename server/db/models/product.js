const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  photo: {
    type: Sequelize.STRING
    // JM - defaultValue?
  },
  rating: {
    type: Sequelize.INTEGER
    // JM
    //needs to calculate average - maybe a getter?
  },
  // JM - keep prices as integer.
  // $1.99 -> 199, maybe use getters/setters
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Product
