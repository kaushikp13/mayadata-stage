import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-operators',
  templateUrl: './workloads-operators.component.html',
  styleUrls: ['./workloads-operators.component.scss']
})
export class WorkloadsOperatorsComponent implements OnInit {

  @Input('operatorDetails') operatorDetails: any;
  constructor() { }

  ngOnInit() {
  }

}
