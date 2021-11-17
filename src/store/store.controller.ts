/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Stores } from './entities/store.entity';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('store')
@ApiTags('Store')
export class StoreController {
  constructor(private readonly storeService: StoreService) { }


  @Get()
  @ApiOperation({ summary: 'List Store' })
  @ApiResponse({ status: 200, isArray: true, description: 'Success' })
  findAll(@Query() query): Promise<any> {
    return this.storeService.findAll(query)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Store Detail' })
  @ApiResponse({ status: 200, description: 'Success' })
  get(@Param() params) {
    return this.storeService.findOne(params.id);
  }

  @Post()
  @ApiOperation({ summary: 'Create Store' })
  @ApiResponse({ status: 200, description: 'Success' })
  @UsePipes(ValidationPipe)
  create(@Body() store: CreateStoreDto) {
    console.log('22121', store);
    return this.storeService.create(store);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Store' })
  @ApiResponse({ status: 200, description: 'Success' })
  @UsePipes(ValidationPipe)
  update(@Param('id') id, @Body() store: UpdateStoreDto) {
    return this.storeService.update(id, store);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Store' })
  @ApiResponse({ status: 200, description: 'Success' })
  deleteUser(@Param('id') id) {
    return this.storeService.delete(id);
  }
}
