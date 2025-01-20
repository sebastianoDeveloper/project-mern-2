import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';


class ProductsService {
  constructor() {
   this.products = []
   this.generate()
  }
  async generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 2000);
    })
  }
  async findOne(id) {
    // const name  =  this.getTotal()
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('Sorry, Product not found :( :p ')
    }
    if (product.isBlock) {
      throw boom.conflict('Sorry, Product is block :( :p ')
    }
    return product;
  }
  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      // throw new Error('Sorry, Product not found :( :p ');
      throw boom.notFound('Sorry, Product not found :( :p ')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
      id:product.id
    }
    return this.products[index]
  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      // throw new Error('Product not found');
      throw boom.notFound('Sorry, Product not found :( :p ')

    }
    this.products.splice(index, 1)
    return {id}

  }
}
export default ProductsService;
