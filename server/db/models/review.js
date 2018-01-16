const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.BIGINT
  }
})

module.exports = Review
