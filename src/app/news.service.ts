import { Injectable } from '@angular/core';
import { News } from './news.model';
import { NEWS } from './mock-news';

@Injectable()
export class NewsService {

  constructor() { }
  getNews() {
    return NEWS;
  }

  getNewsById(newsId: number){
    for (var i = 0; i <= NEWS.length - 1; i++) {
      if (NEWS[i].id === newsId) {
        return NEWS[i];
      }
    }
  }
}
