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
  },
  rating: {
    type: Sequelize.INTEGER
    //needs to calculate average
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports = Product
