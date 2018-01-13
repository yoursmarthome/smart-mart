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
const { User, Category, Product, Review } = require('../server/db/models')

const categories = [
  {
    name: 'Home Assistants',
    description: 'To control your home.',
    photo: '',
    products: [
      {
        name: 'Google - Home - White/Slate fabric',
        description: 'Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.',
        photo: '../assets/images/products/Google_Home_3.jpg',
        rating: 5,
        price: 128.99
      },
      {
        name: 'Google - Home Mini - Chalk',
        description: 'Get hands-free help in any room. Google Home Mini is powered by the Google Assistant, so you can ask it questions and tell it to do things. Just start with "Ok Google" to get answers from Google, tackle your day, enjoy your entertainment, and control your smart home. And when you ask for help, it can tell your voice from others for a more personalized experience. Google Home Mini works on its own or you can have a few around the house, giving you the power of Google anywhere.',
        photo:'../assets/images/products/Google_Home_Mini_1.jpg',
        rating: 5,
        price: 48.99
      },
      {
        name: 'Google - Home & Google Home Mini in Chalk Package',
        description: 'Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.',
        photo:'../assets/images/products/Google_Home_Package.jpg',
        rating: 5,
        price: 157.99
      }
    ]
  },
  {
    name: 'Lighting',
    description: 'To light your house.',
    photo: '',
    products: []
  },
  {
    name: 'Temperature Control',
    description: 'To control your temperature.',
    photo: '',
    products: []
  },
  {
    name: 'Security Cameras',
    description: 'To light your house.',
    photo: '',
    products: []
  },
  {
    name: 'Home Theater',
    description: 'To light your house.',
    photo: '',
    products: []
  },
  {
    name: 'Appliances',
    description: 'To control your temperature.',
    photo: '',
    products: []
  }
];



db.sync({force: true})
  .then(() => {
    return Promise.all(categories.map(category => {
      Category.create(category, { include: Product })
    }))
  })
  .then(() => console.log('Successfully seeded db!'))
  .catch(err => console.error('Error seeding db. Error:', err));
console.log('seeding...')
