import { Component, OnInit } from '@angular/core';
import { pricingOverview } from "../../../contents/pages/pricing";
@Component({
  selector: 'app-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss']
})
export class PricingCardsComponent implements OnInit {
  pricingOverview: any;

  constructor() {
    this.pricingOverview = pricingOverview
  }

  ngOnInit() {
  }

  objectKeys = Object.keys;
}
