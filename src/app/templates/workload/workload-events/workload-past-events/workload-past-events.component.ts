import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workload-past-events',
  templateUrl: './workload-past-events.component.html',
  styleUrls: ['./workload-past-events.component.scss']
})
export class WorkloadPastEventsComponent implements OnInit {
  @Input('pastEvents') pastEvents;
  constructor() {
  }

  ngOnInit() {
  }

}
