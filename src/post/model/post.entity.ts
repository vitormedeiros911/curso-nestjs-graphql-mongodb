import { ObjectIdColumn, Column } from 'typeorm';

export class Post {
  @ObjectIdColumn()
  _id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  url_imagem: string;
}
