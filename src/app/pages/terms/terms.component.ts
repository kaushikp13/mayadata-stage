import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  terms = {
    title: `MayaData User Terms of Service`,
    date: `Feb 28, 2019`,
    markdownSrc: `./assets/data/pages/terms.md`
  }

}
