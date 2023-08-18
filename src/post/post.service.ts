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
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
    });

    console.log(post);

    if (!post) throw new NotFoundException('Post não encontrado');

    return post;
  }

  async editarPost(id: string, createPostInput: CreatePostInput) {
    const post = await this.verPost(id);

    Object.assign(post, createPostInput);

    return this.postRepository.save(post);
  }

  async excluirPost(id: string) {
    await this.verPost(id);

    await this.postRepository.delete({
      id,
    });

    return 'Post excluído com sucesso';
  }

  async adicionarComentario(id: string, comentario: string) {
    const post = await this.verPost(id);

    if (post.comentarios)
      post.comentarios.push({
        id: uuid(),
        texto: comentario,
        likes: 0,
      });
    else post.comentarios = [{ id: uuid(), texto: comentario, likes: 0 }];

    return this.postRepository.save(post);
  }

  async excluirComentario(id: string, idComentario: string) {
    const post = await this.verPost(id);

    const comentario = post.comentarios.find((c) => c.id === idComentario);

    if (!comentario) throw new NotFoundException('Comentário não encontrado');

    post.comentarios = post.comentarios.filter((c) => c.id !== idComentario);

    return this.postRepository.save(post);
  }

  async darLike(id: string) {
    const post = await this.verPost(id);

    post.likes++;

    return this.postRepository.save(post);
  }

  async removerLike(id: string) {
    const post = await this.verPost(id);

    post.likes--;

    return this.postRepository.save(post);
  }

  async darLikeComentario(id: string, idComentario: string) {
    const post = await this.verPost(id);

    const comentario = post.comentarios.find((c) => c.id === idComentario);

    if (!comentario) throw new NotFoundException('Comentário não encontrado');

    comentario.likes++;

    return this.postRepository.save(post);
  }

  async removerLikeComentario(id: string, idComentario: string) {
    const post = await this.verPost(id);

    const comentario = post.comentarios.find((c) => c.id === idComentario);

    if (!comentario) throw new NotFoundException('Comentário não encontrado');

    comentario.likes--;

    return this.postRepository.save(post);
  }
}
