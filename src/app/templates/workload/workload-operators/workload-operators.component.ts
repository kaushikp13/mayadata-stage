import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-operators',
  templateUrl: './workload-operators.component.html',
  styleUrls: ['./workload-operators.component.scss']
})
export class WorkloadOperatorsComponent implements OnInit {

  @Input('data') operators;
  constructor() { }

  ngOnInit() {
  }

}
