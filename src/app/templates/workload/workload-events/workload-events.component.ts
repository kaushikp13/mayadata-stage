import { Component, Input, OnInit } from '@angular/core';
import { isEventOver } from "../../../utilities/isWebinarOver";
@Component({
  selector: 'app-workload-events',
  templateUrl: './workload-events.component.html',
  styleUrls: ['./workload-events.component.scss']
})
export class WorkloadEventsComponent implements OnInit {

  @Input("data") events;

  isEventDateOver: boolean;
  constructor() {

  }

  ngOnInit() {
    if (this.events.currentEvent) {
      this.isEventDateOver = isEventOver(this.events.currentEvent.eventFinishDateAndTime);
    }
  }
}
