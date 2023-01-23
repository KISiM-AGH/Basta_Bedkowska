import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe, Post,
  Put,
} from '@nestjs/common';
import { GameService } from './game.service';
import { UpdateGameStateDto } from './dto/update-game-state.dto';
import { CreateGameStateDto } from './dto/create-game-state.dto';

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

  @Post(':reset')
  newGame(@Body() createGameStateDto: CreateGameStateDto) {
    return this.gameService.createNewGame(createGameStateDto);
  }
}
