import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreatePostInput } from './input/create-post.input';
import { PostRepository } from './model/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async criarPost(createPostInput: CreatePostInput) {
    const { descricao, urlImagem } = createPostInput;

    const post = this.postRepository.create({
      id: uuid(),
      descricao,
      urlImagem,
    });

    return this.postRepository.save(post);
  }

  async listarPosts() {
    return this.postRepository.find();
  }

  async verPost(id: string) {
    const post = this.postRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) throw new NotFoundException('Post não encontrado');

    return post;
  }

  async editarPost(id: string, createPostInput: CreatePostInput) {
    const post = await this.verPost(id);

    if (!post) throw new NotFoundException('Post não encontrado');

    Object.assign(post, createPostInput);

    return this.postRepository.save(post);
  }

  async excluirPost(id: string) {
    const post = await this.verPost(id);

    if (!post) throw new NotFoundException('Post não encontrado');

    await this.postRepository.delete({
      id,
    });

    return 'Post excluído com sucesso';
  }
}
