/* eslint-disable prettier/prettier */
import {
    IsNotEmpty,
    IsObject,
    IsEmail,
    IsString,
    IsOptional,
    IsIn,
    IsArray
} from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateLocationDTO } from './create-location.dto';


export class UpdateStoreDto {
    @IsOptional()
    @IsString()
    @ApiProperty({
        required: false,
        type: String,
        description: 'Mã',
    })
    code: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        required: true,
        type: String,
        description: 'Tên',
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        required: true,
        example: '0909090909',
        description: 'Số điện thoại',
    })
    phone: string;

    @IsOptional()
    @ApiProperty({
        required: false,
        example: 'test test',
        description: 'Người đại diện',
    })
    legal_representative: string;


    @IsOptional()
    @ApiProperty({
        required: false,
        description: 'Địa chỉ công ty',
    })
    location: string;

    @IsNotEmpty()
    @IsArray()
    @ApiProperty({
        required: true,
        description: 'Dich vu',
    })
    services: string[];
}
