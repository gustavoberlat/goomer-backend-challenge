import DatabaseService from './Database/DatabaseService';

const dbService = new DatabaseService();


export default class RestaurantsService {
  public async findMany() {
    const restaurants = await dbService.findMany('restaurant');
    
    return restaurants;
  }

  public async createOne(data) {
    const restaurant = data;
    const createRestaurant = await dbService.createOne('restaurant', restaurant);
    
    return createRestaurant;
  }

  public async update(id: number, data) {
  	const restaurant = data;
    const updateRestaurant = await dbService.update('restaurant', id, restaurant); 
    
    return updateRestaurant;
  }

  public async delete(id: number) {
  	const deleteRestaurant = await dbService.delete('restaurant', id); 

  	return deleteRestaurant;
  }

}