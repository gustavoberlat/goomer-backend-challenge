import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  
  Route.get('/products/:id', async () => {
    return { hello: 'world' }
  })

  Route.get('/products/', 'ProductsController.index')

  Route.post('/products/', 'ProductsController.create')

  Route.patch('/products/:id', 'ProductsController.update')

  Route.delete('/products/:id', 'ProductsController.delete')

}).prefix('api')