import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-resources',
  templateUrl: './workload-resources.component.html',
  styleUrls: ['./workload-resources.component.scss']
})
export class WorkloadResourcesComponent implements OnInit {


  @Input("data") resources;

  constructor() { }

  ngOnInit() {
  }

}
