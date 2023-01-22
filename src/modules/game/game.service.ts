import { Injectable } from '@nestjs/common';
import { WordService } from '../word/word.service';
import { randomInt } from 'crypto';

@Injectable()
export class GameService {
  constructor(private readonly wordService: WordService) {}

  async chooseWord() {
    const maxID = await this.wordService.getMaxID();
    return this.wordService.findOne(randomInt(1, maxID + 1));
  }
}
