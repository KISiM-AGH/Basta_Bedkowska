import { Injectable, NotFoundException } from '@nestjs/common';
import { WordService } from '../word/word.service';
import { randomInt } from 'crypto';
import { UpdateGameStateDto } from './dto/update-game-state.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameStateDto } from './dto/create-game-state.dto';
import { CreateWordDto } from '../word/dto/create-word.dto';

@Injectable()
export class GameService {
  constructor(
    private readonly wordService: WordService,
    private readonly prismaService: PrismaService,
  ) {}

  createNewGame(createGameState: CreateGameStateDto) {
    return this.prismaService.gameState.create({
      data: {
        mistakes: createGameState.mistakes,
        gameState: createGameState.gameState,
        word: createGameState.word,
        wordID: createGameState.wordID,
      },
    });
  }

  async chooseWord() {
    const maxID = await this.wordService.getMaxID();
    const chosenID = randomInt(1, maxID + 1);
    let chosen = new CreateWordDto();
    chosen = await this.wordService.findOne(chosenID);
    let temp: string;
    temp = '';
    for (let i = 0; i < chosen.word.length; i++) {
      temp += '-';
    }
    chosen.word = temp;
    const newGame = new CreateGameStateDto('0', '', chosen.word, chosenID);

    return this.createNewGame(newGame);
  }

  async checkIfContains(id: number, l: UpdateGameStateDto) {
    const word = await this.wordService.findOne(id);
    const status: CreateGameStateDto = await this.getGameState(1);
    let currentWord = '';
    let flag = false;
    if (word.word.includes(l.letter)) {
      for (let i = 0; i < word.word.length; i++) {
        if (word.word.charAt(i) === l.letter) {
          currentWord += l.letter;
          flag = true;
        } else {
          currentWord += '-';
        }
      }
    }
    let war = 0;
    if (flag) {
      let updatedWord: string;
      updatedWord = '';
      for (let i = 0; i < status.word.length; i++) {
        if (currentWord.charAt(i) === '-' && status.word.charAt(i) === '-') {
          updatedWord += '-';
          war = war + 1;
        }
        if (currentWord.charAt(i) != '-' && status.word.charAt(i) === '-') {
          updatedWord += currentWord.charAt(i);
        }
        if (currentWord.charAt(i) === '-' && status.word.charAt(i) != '-') {
          updatedWord += status.word.charAt(i);
        }
      }
      status.word = updatedWord;
      if (war === 0) {
        status.gameState = 'wygrana';
      }
    } else {
      let int: number = +status.mistakes;
      int = int + 1;
      status.mistakes = String(int);
      if (status.mistakes == '10') {
        status.gameState = 'przegrana';
      }
    }
    this.updateGameState(1, status);
    return status;
  }

  async updateGameState(id: number, update: CreateGameStateDto) {
    const status = await this.getGameState(id);
    return this.prismaService.gameState.update({
      where: { id },
      data: {
        mistakes: update.mistakes,
        gameState: update.gameState,
        word: update.word,
      },
    });
  }

  async getGameState(id: number) {
    const status = await this.prismaService.gameState.findUnique({
      where: {
        id: id,
      },
    });
    if (!status) throw new NotFoundException('W bazie nie ma gier.');
    return status;
  }

  async deleteGameState(id: number) {
    const status = await this.getGameState(id);
    return this.prismaService.gameState.delete({ where: { id } });
  }
}
