import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../services/utils/utils.service"
import { GTM } from "../../constants/constants";
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  signUpUrl: string;
  buttonShow: boolean = true;
  GTM: any;
  constructor(private utils: UtilsService) {
    this.GTM = GTM;
  }

  ngOnInit() {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

}
