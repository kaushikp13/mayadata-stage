import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-template',
  templateUrl: './markdown-template.component.html',
  styleUrls: ['./markdown-template.component.scss']
})
export class MarkdownTemplateComponent implements OnInit {

  @Input('data') markdown;

  constructor() { }

  ngOnInit() {
  }

  onError(e) {
    console.log(e);
  }

}
