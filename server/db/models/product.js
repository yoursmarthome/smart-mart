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
    type: Sequelize.BIGINT
    //needs to calculate average
  },
  price: {
    type: Sequelize.BIGINT,
    set(ogPrice) {
      this.setDataValue('price', ogPrice * 100)
    },
    get() {
      return (this.getDataValue('price') / 100).toFixed(2)
    }
  }
})

module.exports = Product
