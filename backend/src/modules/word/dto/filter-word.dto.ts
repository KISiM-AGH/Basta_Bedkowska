import { IsOptional, IsString, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class FilterWordDto {
  @IsOptional()
  @IsString()
  word: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @Min(1)
  @Max(10)
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  limit? = 10;

  @IsOptional()
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  offset? = 0;
}
