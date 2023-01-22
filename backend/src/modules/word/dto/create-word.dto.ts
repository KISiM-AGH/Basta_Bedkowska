import { IsString } from 'class-validator';

export class CreateWordDto {
  @IsString()
  word: string;
  @IsString()
  description: string;
  @IsString()
  category: string;
}
