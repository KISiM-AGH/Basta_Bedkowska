import { Categories } from '../categories';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  word: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsEnum(Categories)
  category: Categories;
}
