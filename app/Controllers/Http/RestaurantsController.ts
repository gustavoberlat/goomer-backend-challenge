import RestaurantsService from '../../Services/RestaurantsService';

const restaurantsService = new RestaurantsService();

export default class RestaurantsController {
  public async index() {
    const restaurants = await restaurantsService.findMany();
    return { fail: false, data: restaurants };
  }

  public async create({ request }) {
    const data = request.only(['restaurant_name', 'restaurant_image_url', 'restaurant_address']);
    const createRestaurant = await restaurantsService.createOne(data); 

    return { fail: false, data: createRestaurant };
  }

  public async update({ request }) {
  	const id = Number( request.param('id') ); 
  	const data = request.only(['restaurant_name', 'restaurant_image_url', 'restaurant_address']); 
    const updateRestaurant = await restaurantsService.update(id, data); 
    
    return { fail: false, data: updateRestaurant };
  }

  public async delete({ request }) {
  	const id = Number( request.param('id') ); 
	const deleteRestaurant = await restaurantsService.delete(id); 
  	
  	return { fail: false, data: deleteRestaurant };
  }
}
