import { Component, OnInit } from '@angular/core';
import { consultingPartners, partnerPageIntro, platformPartners, technologyPartners, workloadPartners } from '../../contents/pages/partners';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  // partnersBgImageUrl = 'assets/images/partners/bg.png';
  partnersBgImageUrl = '';
  partnersBgImageUrlForMobile = 'assets/images/partners/bg_mob.svg';
  isViewLarge: boolean;

  partnerPageIntro: any = partnerPageIntro;
  technologyPartners: any = technologyPartners;
  platformPartners: any = platformPartners;
  workloadPartners: any = workloadPartners;
  consultingPartners: any = consultingPartners;

  constructor() { }

  ngOnInit() {
    this.setWindowUrl();
    if (window.innerWidth >= 768) {
      this.isViewLarge = true;
    }
  }

  setWindowUrl() {
    for (let index = 0; index < this.technologyPartners.length; index++) {
      const element = this.technologyPartners[index];
      if (element.imgAlt == 'Data Core') {
        element.websiteUrl = `https://www.datacore.com/?utm_source=${window.location.href}&utm_medium=cpc&utm_campaign=partners_page`;
        element.isWebsiteUrl = true;
      }
    }
  }

}
