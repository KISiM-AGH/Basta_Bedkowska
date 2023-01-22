import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { GameService } from './game.service';
import { UpdateGameStateDto } from './dto/update-game-state.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(':random')
  randomWord() {
    return this.gameService.chooseWord();
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameStateDto: UpdateGameStateDto,
  ) {
    return this.gameService.checkIfContains(id, updateGameStateDto);
  }
}
