const Sequelize = require('sequelize')
const db = require('../db')



const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('pending', 'shipped', 'delivered')
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.ENUM("AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"),
    allowNull: false
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: 5,
      max: 99999
    }
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: 10,
      max: 9999999999
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Order
