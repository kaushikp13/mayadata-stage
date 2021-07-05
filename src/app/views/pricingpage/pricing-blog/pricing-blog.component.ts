import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-blog',
  templateUrl: './pricing-blog.component.html',
  styleUrls: ['./pricing-blog.component.scss']
})
export class PricingBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blog = {
    title: `Openness - open source - open pricing and MayaData`,
    subtitle: `Read more about how MayaData pricing works`,
    cta: {
      url: `https://blog.mayadata.io/openness-open-source-open-pricing-and-mayadata`,
      text: 'Read Now'
    }

  }

}
