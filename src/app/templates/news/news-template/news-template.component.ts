import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-template',
  templateUrl: './news-template.component.html',
  styleUrls: ['./news-template.component.scss']
})
export class NewsTemplateComponent implements OnInit {

  @Input('data') news;

  constructor() { }

  ngOnInit() {
  }

  onError(e) {
    console.log(e);
  }

}
