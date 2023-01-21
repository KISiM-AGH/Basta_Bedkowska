import { Injectable } from '@nestjs/common';
import { Word } from './word';
import { WordNotFoundException } from './word.exception';

@Injectable()
export class WordService {
  private words: Word[] = [];
  private id = 0;

  public get(): Word[] {
    return this.words;
  }

  public getById(id: number): Word | undefined {
    const word = this.words.find((w) => w.id == id);

    //Handle getting an element that does not exist
    if (!word)
      throw new WordNotFoundException('To słowo nie istnieje w bazie.');
    return word;
  }

  public create(wo: string): Word {
    const word: Word = { word: wo, id: this.id };
    this.id++;
    this.words.push(word);
    return word;
  }

  public remove(id: number): void {
    //Check if the word exists first
    this.getById(id);
    this.words = this.words.filter((w) => w.id != id);
  }
}
