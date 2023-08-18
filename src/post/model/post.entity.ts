import { Field, ObjectType } from '@nestjs/graphql';
import { Comentario } from 'src/post/model/comentario.entity';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @ObjectIdColumn()
  _id: string;

  @Field()
  @PrimaryColumn()
  id: string;

  @Column()
  @Field()
  descricao: string;

  @Column()
  @Field()
  urlImagem: string;

  @Column()
  @Field()
  likes: number;

  @Column(() => Comentario)
  @Field(() => [Comentario], { nullable: true })
  comentarios: Comentario[];
}
