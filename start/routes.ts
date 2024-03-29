/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import './routes/restaurants'
import './routes/products' 

Route.group(() => {
  
  Route.get('/', async () => {
    return { 
      restaurant_routes: '/api/restaurants'
      products_routes: '/api/products' 
    }
  })

}).prefix('api')


Route.get('/', async () => {
    return { try: '/api/' }
})