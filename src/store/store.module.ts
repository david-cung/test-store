/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stores } from './entities/store.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Stores])],
  controllers: [StoreController],
  providers: [StoreService]
})
export class StoreModule {}
