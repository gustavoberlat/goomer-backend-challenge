import DatabaseService from '../../Services/Database/DatabaseService';

const dbService = new DatabaseService();

export default class RestaurantsController {
  public async index() {
    const restaurants = await dbService.findMany('restaurant');
    return { fail: false, data: restaurants };
  }

  public async create() {
    const restaurant = {
      name: 'Boas Belas Restaurante',
    };

    const createRestaurant = await dbService.create('restaurant', restaurant);
    return { fail: false, data: createRestaurant };
  }

  public async update(id: number) {}

  public async delete(id: number) {}
}
