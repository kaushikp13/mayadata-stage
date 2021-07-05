import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../../services/utils/utils.service';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {

  @Input() pricingLevelObj;

  subscriptionsUrl: string;
  constructor(private utils: UtilsService) {
    this.subscriptionsUrl = `${this.utils.websites().productUrl}/subscriptions`;
  }

  ngOnInit() {
  }

}
