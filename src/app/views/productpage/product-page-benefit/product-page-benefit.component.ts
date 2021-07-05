import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page-benefit',
  templateUrl: './product-page-benefit.component.html',
  styleUrls: ['./product-page-benefit.component.scss']
})
export class ProductPageBenefitComponent implements OnInit {
  propel1: boolean = true;
  propel2: boolean = false;
  propel3: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  selectTab(value) {
    if (value === 'propel1') {
      this.propel1 = true;
      this.propel2 = false;
      this.propel3 = false;
    }
    if (value === 'propel2') {
      this.propel1 = false;
      this.propel2 = true;
      this.propel3 = false;
    }
    if (value === 'propel3') {
      this.propel1 = false;
      this.propel2 = false;
      this.propel3 = true;
    }
  }
}
