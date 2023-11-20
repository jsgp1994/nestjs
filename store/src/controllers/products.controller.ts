import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service'

import { ParseIntPipe } from '../common/parse-int/parse-int.pipe'

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos'

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService ) {}

  @Get('filter')
  getProductFilter() {
    return {
      message: `esto es un filtro`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Limit => ${limit} - Offset => ${offset} - Brand => ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(+id);
  }
}
