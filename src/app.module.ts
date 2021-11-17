import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.MY_SQL_URL,
        port: +process.env.MY_SQL_PORT,
        username: process.env.MY_SQL_USER,
        password: process.env.MY_SQL_PASSWORD,
        database: process.env.MY_SQL_DATABASE,
        autoLoadEntities: true,
        synchronize: true,
      }),
    StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
