import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@ObjectType()
export class Comentario {
  @Column()
  @Field()
  id: string;

  @Column()
  @Field()
  texto: string;

  @Column()
  @Field()
  likes: number;
}
