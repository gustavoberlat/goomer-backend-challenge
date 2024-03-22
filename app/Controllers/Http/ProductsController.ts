import ProductsService from '../../Services/ProductsService';

const productsService = new ProductsService();

export default class ProductsController {
  public async index() {
    const products = await productsService.findMany();
    return { fail: false, data: products };
  	}

  public async create({ request }) {
    const data = request.only(['restaurant_id', 'product_name', 'product_image_url', 'product_price', 'product_category', 'active_discount']);
    const createProduct = await productsService.createOne(data); 

    return { fail: false, data: createProduct };
  }

  public async update({ request }) {
  	const id = Number( request.param('id') ); 
    const data = request.only(['restaurant_id', 'product_name', 'product_image_url', 'product_price', 'product_category', 'active_discount']);
    const updateProduct = await productsService.update(id, data); 
    
    return { fail: false, data: updateProduct };
  }

  public async delete({ request }) {
  	const id = Number( request.param('id') ); 
  	const deleteProduct = await productsService.delete(id); 
  	
  	return { fail: false, data: deleteProduct };
  }
}
