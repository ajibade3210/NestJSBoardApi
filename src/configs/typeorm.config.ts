import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'boardproject',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

// change synchronize to false in production mode
