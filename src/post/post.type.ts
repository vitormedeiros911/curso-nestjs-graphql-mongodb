import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field()
  id: string;

  @Field()
  titulo: string;

  @Field()
  descricao: string;

  @Field()
  url_imagem: string;
}
