import { IsString, Length } from 'class-validator';

export class houseDetailDto {
  @IsString()
  @Length(1, 20, { message: '商品id需要传过来~' })
  readonly id: string;
}
