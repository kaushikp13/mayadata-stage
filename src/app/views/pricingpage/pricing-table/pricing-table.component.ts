import { Component, OnInit } from '@angular/core';
import { pricingOverview } from "../../../contents/pages/pricing";
import { UtilsService } from '../../../services/utils/utils.service';
@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {

  pricingOverview: any;
  subscriptionsUrl: string;
  constructor(private utils: UtilsService) {
    this.pricingOverview = pricingOverview;
    this.subscriptionsUrl = `${this.utils.websites().productUrl}/subscriptions`;
  }

  ngOnInit() {
  }

  objectKeys = Object.keys;
}

