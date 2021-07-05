import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { aboutPageIntro, advisors, investors, sectionTitle } from '../../contents/pages/about';
import { SectionTitle } from "../../models/common.model"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  image_url = 'assets/images/mule-is-saying.png';
  image_url_mob = 'assets/images/mule-talking.png';
  bgImageUrlDesktop = 'assets/images/aboutus/about.svg';
  bgImageUrlMobile = 'assets/images/aboutus/about-mob.svg';
  bgImageUrlTablet = 'assets/images/aboutus/about-tab.svg';
  isViewLarge: boolean;
  public innerWidth: number;

  aboutPageIntro: any = aboutPageIntro;
  sectionTitle: SectionTitle = sectionTitle;
  investors: any = investors;
  advisors: any = advisors;

  constructor(private el: ElementRef, private render: Renderer2, private router: Router) { }
  i: any;
  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      return window.scrollTo(0, 0);
    });

    this.updateBgImage();


  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateBgImage();
  }
  updateBgImage = () => {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 768) {
      this.isViewLarge = true;
    } else {
      this.isViewLarge = false;
    }
  }
}
