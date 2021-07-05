import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-benefits',
  templateUrl: './workloads-benefits.component.html',
  styleUrls: ['./workloads-benefits.component.scss']
})
export class WorkloadsBenefitsComponent implements OnInit {

  @Input('workloadBenefits') workloadBenefits: any;

  constructor() { }

  ngOnInit() {
  }

}
