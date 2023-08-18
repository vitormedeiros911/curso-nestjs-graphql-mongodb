import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreatePostInput } from './input/create-post.input';
import { Post } from './model/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => String)
  sayHello() {
    return 'Hello World!';
  }

  @Query(() => [Post])
  async listarPosts(): Promise<Post[]> {
    return this.postService.listarPosts();
  }

  @Mutation(() => Post)
  async criarPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.criarPost(createPostInput);
  }

  @Query(() => Post)
  async verPost(@Args('id') id: string): Promise<Post> {
    return this.postService.verPost(id);
  }

  @Mutation(() => Post)
  async editarPost(
    @Args('id') id: string,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.editarPost(id, createPostInput);
  }

  @Mutation(() => String)
  async excluirPost(@Args('id') id: string): Promise<string> {
    return this.postService.excluirPost(id);
  }

  @Mutation(() => Post)
  async adicionarComentario(
    @Args('id') id: string,
    @Args('comentario') comentario: string,
  ): Promise<Post> {
    return this.postService.adicionarComentario(id, comentario);
  }

  @Mutation(() => Post)
  async excluirComentario(id: string, idComentario: string) {
    return this.postService.excluirComentario(id, idComentario);
  }

  @Mutation(() => Post)
  async darLike(@Args('id') id: string): Promise<Post> {
    return this.postService.darLike(id);
  }

  @Mutation(() => Post)
  async removerLike(@Args('id') id: string): Promise<Post> {
    return this.postService.removerLike(id);
  }

  @Mutation(() => Post)
  async darLikeComentario(
    @Args('id') id: string,
    @Args('idComentario') idComentario: string,
  ): Promise<Post> {
    return this.postService.darLikeComentario(id, idComentario);
  }

  @Mutation(() => Post)
  async removerLikeComentario(
    @Args('id') id: string,
    @Args('idComentario') idComentario: string,
  ): Promise<Post> {
    return this.postService.removerLikeComentario(id, idComentario);
  }
}
