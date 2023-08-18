import { ObjectIdColumn, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  descricao: string;

  @Column()
  urlImagem: string;
}
