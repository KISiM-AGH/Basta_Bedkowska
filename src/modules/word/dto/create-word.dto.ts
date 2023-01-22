import { Categories } from '../categories';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'isomorphic-dompurify';

export class CreateWordDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) =>
    sanitize(value, { USE_PROFILES: { html: false } }),
  )
  word: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(Categories)
  @IsNotEmpty()
  category: Categories;
}
