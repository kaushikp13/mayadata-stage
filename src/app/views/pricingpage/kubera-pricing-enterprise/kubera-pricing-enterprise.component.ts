import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-kubera-pricing-enterprise',
  templateUrl: './kubera-pricing-enterprise.component.html',
  styleUrls: ['./kubera-pricing-enterprise.component.scss']
})
export class KuberaPricingEnterpriseComponent implements OnInit {
  successFlag: boolean = false;
  failerFlag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showContactus() {
    this.successFlag = false;
    this.successFlag = false;
    $('#contactPricing').modal('show');
  }

  responseFromApi(e) {
    if (e == "show") {
      this.successFlag = true;
      this.failerFlag = false;
    }
    else {
      this.successFlag = false;
      this.failerFlag = true;

    }
  }

}
