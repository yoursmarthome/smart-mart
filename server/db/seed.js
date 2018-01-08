import { User, Product, Category, Review } from './index.js'

const categories = [
    {
        name: 'Temperature Control',
        description: 'To control your temperature.',
        photo: ''
    },
    {
        name: 'Lighting',
        description: 'To light your house.',
        photo: ''
    }
]

const products = [
    {
        name: 'Thermostat',
        description: 'Auto adjusts your thermostat',
        photo: '',
        rating: 0,
        price: 99.9,
        categoryId: 1
    },
    {
        name: 'Smart-Bulb',
        description: "It's real now!",
        photo: '',
        rating: 5,
        price: 2.50,
        categoryId: 2
    }
]

const seed = () => {
  Promise.all(categories.map(category =>
    Category.create(category))
  )
  .then(() =>
  Promise.all(products.map(product =>
    Product.create(product))
  ))
}

const main = () => {
  console.log('Syncing db...')
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      console.log('hello')
      return null;
    })
}

main()