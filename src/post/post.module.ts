import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './model/post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { PostRepository } from './model/post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostResolver, PostService, PostRepository],
})
export class PostModule {}
