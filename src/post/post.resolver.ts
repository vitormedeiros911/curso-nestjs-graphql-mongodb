import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreatePostInput } from './input/create-post.input';
import { PostService } from './post.service';
import { PostType } from './post.type';
import { Post } from './model/post.entity';

@Resolver((_of) => PostType)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query((_returns) => String)
  sayHello() {
    return 'Hello World!';
  }

  @Query((_returns) => [PostType])
  async listarPosts(): Promise<Post[]> {
    return this.postService.listarPosts();
  }

  @Mutation((_returns) => PostType)
  async criarPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.criarPost(createPostInput);
  }

  @Query((_returns) => PostType)
  async verPost(@Args('id') id: string): Promise<Post> {
    return this.postService.verPost(id);
  }

  @Mutation((_returns) => PostType)
  async editarPost(
    @Args('id') id: string,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.editarPost(id, createPostInput);
  }

  @Mutation((_returns) => String)
  async excluirPost(@Args('id') id: string): Promise<string> {
    return this.postService.excluirPost(id);
  }
}
