import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private custumerRepo: Repository<Customer>,
  ) {}

  async findAll() {
    return await this.custumerRepo.find();
  }

  async findOne(id: number) {
    const customer = await this.custumerRepo.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  async create(data: CreateCustomerDto) {
    const newCustomer = await this.custumerRepo.create(data);
    return this.custumerRepo.save(newCustomer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    const customer = await this.findOne(id);
    this.custumerRepo.merge(customer, changes);
    return this.custumerRepo.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    return this.custumerRepo.delete(customer);
  }
}
