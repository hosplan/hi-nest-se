import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  //기본적으로 url을 가져오고 함수를 실행하는것이다.
  controllers: [MoviesController],
  //
  providers: [],
})
export class AppModule {}
