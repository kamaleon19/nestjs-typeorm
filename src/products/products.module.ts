import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ESTE MODULO SE ENCARGARA DE ADMINISTRAR LAS ENTIDADES

// RESPETAR EL SIGUIENTE ORDEN:
import { ProductsController } from './controllers/products.controller'; // 1- EL CONTROLADOR
import { ProductsService } from './services/products.service'; // 2- EL SERVICIO
import { Product } from './entities/product.entity'; // 3- LA ENTIDAD

import { BrandsController } from './controllers/brands.controller';
import { BrandsService } from './services/brands.service';
import { Brand } from './entities/brand.entity';

import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])], // EN IMPORTS NOS ENCARGAMOS DE IMPORTAR LAS ENTIDADES O MODELOS.
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
