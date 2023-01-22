import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(':random')
  randomWord() {
    return this.gameService.chooseWord();
  }

  @Get()
  randomWordCategory() {}
}
