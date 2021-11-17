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


export class FindStoreDto {
    @IsOptional()
    @IsString()
    key_word: string;
}
