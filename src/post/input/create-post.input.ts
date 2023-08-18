import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsUrl, IsArray } from 'class-validator';
import { Comentario } from 'src/post/model/comentario.entity';

@InputType()
export class CreatePostInput {
  @MinLength(3)
  @Field()
  descricao: string;

  @IsUrl()
  @Field()
  urlImagem: string;
}
