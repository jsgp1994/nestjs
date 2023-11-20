import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {

  private counterId = 1;

  private products: Product[] = [{
    id: 1,
    name: 'Medias adidas',
    description: 'algodón',
    price: 500,
    stock: 50,
    image: '',
  }]

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find( (item) => item.id === id);

    if(!product){
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  create(payload: any) {
    this.counterId += 1;

    const newProduct = {
      id: this.counterId,
      ...payload,
    }

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {

    const product = this.findOne(id);

    if (product) {
      const index = this.productIndext(id);

      this.products[index] = {
        ...product,
        ...payload,
      }
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.productIndext(id);
    this.products.splice(index, 1);
    return this.products;
  }

  productIndext(id: number) {
    const index = this.products.findIndex( (item) => item.id === id );

    if(index === -1){
      throw new NotFoundException(`Product ${id} not found`);
    }
    return index;
  }

}
