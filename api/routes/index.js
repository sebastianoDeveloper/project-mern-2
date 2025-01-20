import express from 'express'

import productsRouter from './products.router.js'
// import categoriesRouter from './categories.router'
// import usersRouter from './users.router'

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  // router.use('/users', usersRouter)
  // router.use('/categories', productsRouter)
}
// function routerApi(app) {
//   const mainRoute = '/api/v1';
//   app.use(`${mainRoute}/products` , productsRouter)
//   app.use(`${mainRoute}/users` , usersRouter)
//   app.use(`${mainRoute}/categories` , categoriesRouter)
// }

export default routerApi