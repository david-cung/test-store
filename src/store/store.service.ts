import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Stores } from './entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';


@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Stores)
    private readonly storeRepository: Repository<Stores>,
  ) { }


  async findAll(query): Promise<any> {
    const take = query.take || 10
    const skip = query.skip || 0
    const keyword = query.keyword || ''
    console.log('keyword333', keyword);
    const [result, total] = await this.storeRepository.findAndCount(
      {
        where: { services: In([Like(keyword)]) },
        order: {id: 'DESC'},
        take: take,
        skip: skip
      }
    );

    return {
      data: result,
      count: total
    }
  }

  async findOne(id: number): Promise<Stores> {
    return await this.storeRepository.findOne(id)
  }


  async create(store): Promise<Stores> {
    console.log('9999999999999')
    return await this.storeRepository.save(store)
  }

  async update(id: number, dto: UpdateStoreDto, storeEntity?: Stores): Promise<any> {
    const store = await this.findOne(id);
    console.log('99999', store);
    const updateStore = Object.assign(store, dto);
    console.log('updateStore343', store);
    return await this.storeRepository.save(updateStore);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.storeRepository.delete(id);
  }
}
