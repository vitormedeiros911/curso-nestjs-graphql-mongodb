import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field()
  id: string;

  @Field()
  descricao: string;

  @Field()
  urlImagem: string;
}
