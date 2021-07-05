import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workload-current-event',
  templateUrl: './workload-current-event.component.html',
  styleUrls: ['./workload-current-event.component.scss']
})
export class WorkloadCurrentEventComponent implements OnInit {
  @Input('currentEvent') currentEvent;
  constructor() { }

  ngOnInit() {
  }

}
