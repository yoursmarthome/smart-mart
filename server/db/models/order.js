const Sequelize = require('sequelize')
const db = require('../db')



const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('pending', 'shipped', 'delivered'),
    defaultValue: 'pending',
    allowNull: false
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
    type: Sequelize.STRING
    // allowNull: false
  },
  state: {
    type: Sequelize.ENUM("AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"),
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING
    // allowNull: false,
    // set(zipToInt) {
    //   this.setDataValue('zip', parseInt(zipToInt))
    // },
    // validate: {
    //   len: {
    //     args: 5,
    //     msg: 'Invalid zip code length'
    //   },
    //   // max: 99999
    // }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
    // set(withoutHyphs) {
    //   this.setDataValue(
    //     'phone',
    //     parseInt(withoutHyphs.replace(new RegExp('-', 'g'), ''))
    //   )
    // },
    // validate: {
    //   len: {
    //     args: 10,
    //     msg: 'Phone number must be 10 digits (include area code!)'
    //   }
    //   // max: 9999999999
    // }
  },
  email: {
    type: Sequelize.STRING,
    // unique: true,   should it be unique? multiple orders from one person??
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Order
