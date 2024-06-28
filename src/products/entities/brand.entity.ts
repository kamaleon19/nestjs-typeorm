import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; // IMPORTAMOS LOS DECORADORES DIRECTAMENTE DESDE TYPEORM

@Entity() // ENTITY INDICA QUE ESTA CLASE SEA TRATADA COMO UN SCHEMA O ENTIDAD
export class Brand {
  @PrimaryGeneratedColumn() // PRIMARYGENERATEDCOLUMN INDICA QUE ESTA COLUMNA SERA AUTOINCREMENTAL (SE USA POR LO GRAL PARA LOS IDS)
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true }) // COLUMN INDICA QUE SE TRATA DE UNA COLUMNA DE UNA TABLA EN LA QUE SE PUEDEN ESPECIFICAR EL TIPO DE DATO Y SUS RESPECTICAS CONSTRAINTS
  name: string;

  @Column({ type: 'varchar' })
  image: string;
}
