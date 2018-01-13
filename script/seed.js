/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const { User, Product, Category, Review } = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const categories = await Promise.all([
    Category.create({
      name: 'Temperature Control',
      description: 'To control your temperature.',
      photo: 'https://m.media-amazon.com/images/S/aplus-media/vc/93416ff0-fb8c-48e1-99dc-f1e70e151da1._SR285,285_.png'
    }),
    Category.create({
      name: 'Lighting',
      description: 'To light your house.',
      photo: 'https://m.media-amazon.com/images/S/aplus-media/vc/5888b993-213f-45f7-9b20-3effd8be2ed3._SR285,285_.jpg'
    })
  ])

  const products = await Promise.all([
    Product.create(
      {
      name: 'Nest Learning Thermostat, Easy Temperature Control for Every Room in Your House, Stainless Steel (Third Generation)',
      description: 'SAVE ENERGY WITH NEST: Nest introduces the 3rd generation Nest Learning Thermostat. With four beautiful colors to choose from and an easy to read display, this thermostat will help make your home not only smart but energy efficient. With just a few manual adjustments, the Nest Thermostat can learn your habits and start to save you money by automatically adjusting the temperature.',
      photo: 'https://m.media-amazon.com/images/S/aplus-media/vc/93416ff0-fb8c-48e1-99dc-f1e70e151da1._SR285,285_.png',
      rating: 5,
      price: 235.70,
      categoryId: 1
    }),
    Product.create({
      name: 'POPMAS Wall Plate-Metal Wall Plate Cover for Nest Thermostat 3rd, 2nd and 1st Generation Black',
      description: 'Mount design for Nest Thermostat 3rd, 2nd and 1st Generation',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/41F8awuSw0L._SL500_AC_SS350_.jpg',
      rating: 4,
      price: 19.90,
      categoryId: 1
    }),
    Product.create({
      name: 'ecobee3 lite Smart Thermostat, Works with Amazon Alexa, 2nd Gen',
      description: 'Savings: bring home Ecobee3 lite and save up to 23%* on your heating and cooling costs.',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/31L6STDpnbL._SL500_AC_SS350_.jpg',
      rating: 4,
      price: 169.00,
      categoryId: 1
    }),

    Product.create(
      {
      name: 'Philips Hue White Smart Bulb Starter Kit (4 A19 Bulbs and 1 Bridge, Compatible with Amazon Alexa, Apple HomeKit and Google Assistant)',
      description: 'Automate your lighting experience with Philips Hue and control your lights from home or away. Create light schedules from the Philips Hue App and never come home to a dark house.',
      photo: 'https://m.media-amazon.com/images/S/aplus-media/vc/5888b993-213f-45f7-9b20-3effd8be2ed3._SR285,285_.jpg',
      rating: 5,
      price: 79.99,
      categoryId: 2
    }),
    Product.create({
      name: 'Nexlux LED Strip Lights, Wifi Wireless Smart Phone Controlled Light Strip Kit 16.4ft 150leds 5050 Waterproof IP65 LED Lights ,Working with Android and IOS System,Alexa, Google Assistant',
      description: 'Wifi wireless Smart Controller: You can set Nexlux wifi led light strip to power on with the morning sun, gently waking you, or to turn on and off as you leave or arrive home',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/718CBUC4Q8L._SY355_.jpg',
      rating: 4,
      price: 19.90,
      categoryId: 2
    }),
    Product.create({
      name: 'SYLVANIA Smart+ LED Landscape Lighting Set, Gardenspots - Mini RGB Outdoor Kit with Removable Stakes, Adjustable RGB Color Changing, Includes 9 Lights, 73699 (Formerly LIGHTIFY), Works with Amazon Alexa',
      description: 'ILLUMINATE YOUR GARDEN AND PATIO: 9 Lights position as you wish to create your own outdoor scenes. Perfect for backyard landscape accents, illuminate walkways, or remove stakes to use deck and poolside.',
      photo: 'https://images-na.ssl-images-amazon.com/images/I/51N9VK2QH9L._SL500_AC_SS350_.jpg',
      rating: 4,
      price: 69.98,
      categoryId: 2
    })
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
