import { Query, Resolver } from '@nestjs/graphql';

import { PostType } from './post.type';

@Resolver((_of) => PostType)
export class PostResolver {
  @Query((_returns) => String)
  sayHello() {
    return 'Hello World!';
  }

  // listarPosts() {}

  // @Mutation()
  // async criarPost() {
  //   return 'Post criado com sucesso!';
  // }

  // verPost() {}

  // editarPost() {}

  // excluirPost() {}
}
