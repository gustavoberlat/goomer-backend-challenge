import DatabaseService from './Database/DatabaseService';

const dbService = new DatabaseService();


export default class ProductsService {

	public async findMany() {
    const products = await dbService.findMany('product');
    return products; 
  	}


	public async createOne(data) {
    const product = data; 

    const createProduct = await dbService.createOne('product', product);
    return createProduct;
  }

  public async update(id: number, data) {
  	const product = data;
    const updateProduct = await dbService.update('product', id, product); 
    
    return updateProduct;
  }

  public async delete(id: number) {
  	const deleteProduct = await dbService.delete('product', id); 

  	return deleteProduct;
  }



}