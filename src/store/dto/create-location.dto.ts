import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDTO {
  constructor(object: any = {}) {
    this.address = object.address;
    this.ward = object.ward;
    this.district = object.district;
    this.province = object.province;
    this.ward_name = object.ward_name;
    this.district_name = object.district_name;
    this.province_name = object.province_name;
    this.full_address = object.full_address;
  };

  @ApiProperty({
    example: "34 Dien Bien, quan Dakao, Quan 1, Ho Chi Minh"
  })
  address: string;

  @ApiProperty({
    example: 1
  })
  ward: number;

  @ApiProperty({
    example: 1
  })
  district: number;

  @ApiProperty({
    example: 1
  })
  province: number;

  @ApiProperty({
    example: "Phuong 2"
  })
  ward_name: string;

  @ApiProperty({
    example: "Bình Chánh"
  })
  district_name: string;

  @ApiProperty({
    example: "Ho Chi Minh"
  })
  province_name: string;

  full_address: string;
}
