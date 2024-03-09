import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  
  Route.get('/restaurants/:id', async () => {
    return { hello: 'world' }
  })

  Route.get('/restaurants/', 'RestaurantsController.index')

  Route.post('/restaurants/', 'RestaurantsController.create')

  Route.patch('/restaurants/:id', 'RestaurantsController.update')

  Route.delete('/restaurants/:id', 'RestaurantsController.delete')

}).prefix('api')
