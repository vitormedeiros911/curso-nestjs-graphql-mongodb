import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsUrl } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MinLength(3)
  @Field()
  descricao: string;

  @IsUrl()
  @Field()
  urlImagem: string;
}
