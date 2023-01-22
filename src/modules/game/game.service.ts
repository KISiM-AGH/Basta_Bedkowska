import { Injectable } from '@nestjs/common';
import { WordService } from '../word/word.service';
import { randomInt } from 'crypto';
import { UpdateGameStateDto } from './dto/update-game-state.dto';

@Injectable()
export class GameService {
  constructor(private readonly wordService: WordService) {}

  async chooseWord() {
    const maxID = await this.wordService.getMaxID();
    const chosenID = randomInt(1, maxID + 1);
    return this.wordService.findOne(chosenID);
  }

  async checkIfContains(id: number, l: UpdateGameStateDto) {
    const word = await this.wordService.findOne(id);
    let currentWord: string = '';

    if (word.word.includes(l.letter)) {
      for (let i = 0; i < word.word.length; i++) {
        if (word.word.charAt(i) === l.letter) {
          currentWord += l.letter;
        } else {
          currentWord += '-';
        }
      }
    }
    return currentWord;
  }
}
