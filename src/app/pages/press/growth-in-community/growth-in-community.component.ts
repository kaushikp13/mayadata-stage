import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-growth-in-community',
  templateUrl: './growth-in-community.component.html',
  styleUrls: ['./growth-in-community.component.scss']
})
export class GrowthInCommunityComponent implements OnInit {

  news = {
    title: `MayaData announces record growth in community adoption and revenues`,
    subtitle: `OpenEBS 2.0 released - revenues and adoption each up by over 400%`,
    date: `Aug 17, 2020, 06:30 ET`,
    markdownSrc: `./assets/data/press/mayadata-announces-record-growth-in-community.md`
  }

  constructor() { }

  ngOnInit() {
  }

}
