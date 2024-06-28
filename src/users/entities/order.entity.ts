import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';

@Entity()
export class Order {
  @Column({ type: 'date' })
  date: Date;

  @Column()
  user: User;

  @Column()
  products: Product[];
}
