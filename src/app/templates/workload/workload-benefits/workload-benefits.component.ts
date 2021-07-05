import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-benefits',
  templateUrl: './workload-benefits.component.html',
  styleUrls: ['./workload-benefits.component.scss']
})
export class WorkloadBenefitsComponent implements OnInit {

  @Input("data") benefits;
  viewPortWidth: string
  constructor() {
  }

  ngOnInit() {
    this.viewPortWidth = window.innerWidth + "px";
  }
}
