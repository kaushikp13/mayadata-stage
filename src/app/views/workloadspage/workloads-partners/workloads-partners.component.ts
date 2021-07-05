import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-partners',
  templateUrl: './workloads-partners.component.html',
  styleUrls: ['./workloads-partners.component.scss']
})
export class WorkloadsPartnersComponent implements OnInit {
  @Input('workloadPartners') workloadPartners: any;

  constructor() { }

  ngOnInit() {
  }

}
