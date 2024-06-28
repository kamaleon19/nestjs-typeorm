import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // ESTE ES EL DECORADOR QUE USAREMOS PARA INDICAR QUE ESTAMOS INYECTANDO UN REPOSITORIO
import { Repository } from 'typeorm'; // UTILIZAMOS REPOSITORY PARA AGREGARLE UN TIPADO

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

// USAREMOS REPOSITORIES PARA LA PERSISTENCIA DE DATOS, ES DECIR QUE LAS ENTIDADES SOLAMENTE TENDRAN LOS ATRIBUTOS Y LOS REPOSITORIOS SE ENCARGARAN DE LAS OPERACIONES CRUD Y DEMAS.

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto) {
    const newProduct = await this.productRepo.create(data);
    return this.productRepo.save(newProduct);
  }

  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productRepo.findOne(id); // BUSCA EL PRODUCTO POR ID
    this.productRepo.merge(product, changes); // MERGE RECIBE 2 PARAMETROS, EL OBJETO A ACUALIZAR(PRODUCTO) Y LOS CAMBIOS(CHANGES)
    return this.productRepo.save(product); // LUEGO GUARDAMOS LOS CAMBIOS CON SAVE
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productRepo.delete(product);
  }
}
