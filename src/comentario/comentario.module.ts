import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ComentarioResolver } from './comentario.resolver';
import { ComentarioService } from './comentario.service';
import { ComentarioSchema } from './schema/comentario.schema';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Comentario', schema: ComentarioSchema },
    ]),
    PostModule,
  ],
  providers: [ComentarioService, ComentarioResolver],
})
export class ComentarioModule {}
