import { Component, OnInit } from '@angular/core';
import { storages, titleStorage } from '../../../../app/contents/pages/home';
import { SectionTitle } from '../../../../app/models/common.model';

@Component({
  selector: 'app-homepage-kubera-storage',
  templateUrl: './homepage-kubera-storage.component.html',
  styleUrls: ['./homepage-kubera-storage.component.scss']
})
export class HomepageKuberaStorageComponent implements OnInit {
  titles: SectionTitle = titleStorage;
  mayadataStorage: any;
  storages: any = storages;

  // slides = [
  //   { img: "http://placehold.it/350x150/000000" },
  //   { img: "http://placehold.it/350x150/111111" },
  //   { img: "http://placehold.it/350x150/333333" },
  //   { img: "http://placehold.it/350x150/333333" },
  //   { img: "http://placehold.it/350x150/333333" },
  //   { img: "http://placehold.it/350x150/333333" },

  //   { img: "http://placehold.it/350x150/666666" }
  // ];
  slideConfig = {
    // "slidesToShow": 4, 
    // "slidesToScroll": 4,
    // speed: 300,
    slidesToShow: 1,
    // slidesToScroll: 3,
    // cssEase: 'linear',
    autoplay: true,
    centerMode: true,
    draggable: false,
    focusOnSelect: true,
    // asNavFor: ".feedback",
    // prevArrow: '.client-thumbnails .prev-arrow',
    // nextArrow: '.client-thumbnails .next-arrow',
  };

  constructor() { }

  ngOnInit() {
    this.mayadataStorage = {
      title: this.titles.title || `What’s missing from Kubernetes for Data?`,
      storages: this.storages
    }
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


}
