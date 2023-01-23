import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGameStateDto {
  @IsString()
  @IsNotEmpty()
  mistakes: string;
  @IsString()
  @IsNotEmpty()
  gameState: string;
  @IsString()
  @IsNotEmpty()
  word: string;
  @IsInt()
  @IsNotEmpty()
  wordID: number;

  constructor(mistakes: string, gameState: string, word: string, id: number) {
    this.mistakes = mistakes;
    this.gameState = gameState;
    this.word = word;
    this.wordID = id;
  }
}
