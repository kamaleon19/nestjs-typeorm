import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; // DECORADORES DE TYPEORM PARA ARMAR LOS MODELOS

@Entity() // ESTE DECORADOR INDICA QUE ESTE OBJETO SERA TRATADO COMO UNA ENTIDAD
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true }) // COLUMN ESPECIFICA QUE ESTE ATRIBUTO SERA UNA COLUMNA DE UNA TABLA. ADEMAS SE PUEDE ESPECIFICAR EL TIPO DE DATO Y CONTRAINTS (LEER DOCUMENTACION TYPEORM)
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;
}
