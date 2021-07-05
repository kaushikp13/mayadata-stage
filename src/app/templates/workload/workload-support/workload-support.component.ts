import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-support',
  templateUrl: './workload-support.component.html',
  styleUrls: ['./workload-support.component.scss']
})
export class WorkloadSupportComponent implements OnInit {

  @Input('data') support;
  constructor() { }

  ngOnInit() {
  }

}
