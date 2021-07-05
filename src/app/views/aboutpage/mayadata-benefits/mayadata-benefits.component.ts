import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { benefits } from '../../../contents/pages/about';
import { SectionTitle } from "../../../models/common.model"
@Component({
  selector: 'app-mayadata-benefits',
  templateUrl: './mayadata-benefits.component.html',
  styleUrls: ['./mayadata-benefits.component.scss']
})
export class MayaDataBenefitsComponent implements OnInit, OnChanges {
  @Input() titles: SectionTitle;
  mayadataBenefits: any;
  benefits: any = benefits;

  constructor() { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.mayadataBenefits = {
      title: this.titles.title || `Kubera Benefits`,
      subtitle: this.titles.subtitle || ``,
      benefits: this.benefits
    }
  }

}
