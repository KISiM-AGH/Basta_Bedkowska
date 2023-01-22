import { Categories } from '../categories';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class FilterWordDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @Transform(({ value }) => {
    return value.toLowerCase().trim();
  })
  word?: string;

  @IsOptional()
  @IsEnum(Categories)
  @MinLength(3)
  category?: Categories;
}
