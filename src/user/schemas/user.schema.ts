import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {
  @Prop()
  @Field()
  id: string;

  @Prop()
  @Field()
  nome: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  @HideField()
  senha: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
