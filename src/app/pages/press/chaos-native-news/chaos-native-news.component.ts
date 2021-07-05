import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaos-native-news',
  templateUrl: './chaos-native-news.component.html',
  styleUrls: ['./chaos-native-news.component.scss']
})
export class ChaosNativeNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  news = {
    title: `ChaosNative launches to accelerate Litmus adoption in Enterprises`,
    subtitle: `MayaData, a top 5 contributor of CNCF projects, announces a spin-off of Litmus as an independent company ChaosNative.`,
    date: `Feb 10, 2021`,
    markdownSrc: `./assets/data/press/mayadata-chaos-native.md`
  }

}
