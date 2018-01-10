const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
    // JM - also a validation for notEmpty
  },
  content: {
    type: Sequelize.TEXT
  },
  rating: {
    // JM
    // ENUM: [1,2,3,4,5] ?
    // min/max validation?
    type: Sequelize.INTEGER
  }
})

module.exports = Review
