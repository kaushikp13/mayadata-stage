import { Component, OnInit } from '@angular/core';
import { news } from '../../contents/pages/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  bgImageURL = (window.outerWidth >= 576) ? "" : 'none';
  constructor() { }
  allnews: any = news;
  news: any = [];
  ngOnInit() {
    this.fetchNewData();
  }

  fetchNewData() {
    for (let index = 0; index < 4; index++) {
      const element = this.allnews[index];
      this.news.push(element);
    }
  }

  loadMore() {
    let startIndex = this.news.length;
    let endIndex = startIndex + 4;
    if (endIndex > this.allnews.length) {
      endIndex = this.allnews.length;
    }
    for (let index = startIndex; index < endIndex; index++) {
      const element = this.allnews[index];
      this.news.push(element);
    }
  }


  getFormatedDate(date: Date) {
    return `${date.toLocaleString('en-us', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
  }

}
