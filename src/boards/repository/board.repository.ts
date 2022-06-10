import { EntityRepository, Repository } from 'typeorm';
import { Board } from '../board.entity';

@EntityRepository(Board)
export class Boardrepository extends Repository<Board> {}
