import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-partners',
  templateUrl: './workload-partners.component.html',
  styleUrls: ['./workload-partners.component.scss']
})
export class WorkloadPartnersComponent implements OnInit {

  @Input('data') partners;
  constructor() { }

  ngOnInit() {
  }

}
