import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [NewsService]
})

export class WelcomeComponent implements OnInit {
  news: News[];

  constructor(private router: Router, private newsService: NewsService){}

  ngOnInit(){
    this.news = this.newsService.getNews();
  }

  goToDetailPage(clickedNews: News) {
    this.router.navigate(['news', clickedNews.id]);
  };
}
