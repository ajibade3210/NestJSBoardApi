import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Boardrepository } from './repository/board.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Boardrepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
