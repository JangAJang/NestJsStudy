import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql', 
  host: 'localhost',
  port: 3306,
  username: 'cos',
  password: 'cos1234',
  database: 'security',
  entities: ['dist/**/*.entity.{ts,js}'], 
  synchronize: true,
};