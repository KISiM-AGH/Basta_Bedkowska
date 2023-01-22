import { Injectable } from '@nestjs/common';
import { Word } from './word';
import { WordNotFoundException } from './word.exception';
import { FilterWordDto } from './dto/filter-word.dto';
import { Categories } from './categories';
import { CreateWordDto } from './dto/create-word.dto';

@Injectable()
export class WordService {
  private words: Word[] = [];
  private id = 0;

  public get(query: FilterWordDto): Word[] {
    const result: Word[] = [];
    for (const word of this.words) {
      let filter = true;
      if (typeof query.word === 'string') {
        filter = filter && word.word.toLowerCase().includes(word.word);
        result.push(word);
      }

      if (
        query.category === Categories.colours ||
        query.category === Categories.animals ||
        query.category === Categories.objects
      ) {
        result.push(word);
      }
    }
    return result;
  }

  public getById(id: number): Word | undefined {
    const word = this.words.find((w) => w.id == id);

    //Handle getting an element that does not exist
    if (!word)
      throw new WordNotFoundException('To słowo nie istnieje w bazie.');
    return word;
  }

  public create(data: CreateWordDto): Word {
    const word: Word = {
      id: this.id,
      word: data.word,
      category: data.category,
      description: data.description,
    };
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
