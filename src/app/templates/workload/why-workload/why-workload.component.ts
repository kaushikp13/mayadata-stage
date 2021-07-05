import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-why-workload',
  templateUrl: './why-workload.component.html',
  styleUrls: ['./why-workload.component.scss']
})
export class WhyWorkloadComponent implements OnInit {

  @Input("data") whyWorkload;
  constructor() { }

  ngOnInit() {
  }

}
