import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGameStateDto {
  @IsString()
  @IsNotEmpty()
  letter: string;
}
