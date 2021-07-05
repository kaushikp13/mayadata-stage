import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-events',
  templateUrl: './workloads-events.component.html',
  styleUrls: ['./workloads-events.component.scss']
})
export class WorkloadsEventsComponent implements OnInit {
  @Input('workloadEvents') workloadEvents: any;
  MAIN_CARD_INDEX = 4
  mainCard = this.MAIN_CARD_INDEX;
  constructor() { }

  ngOnInit() {
  }

}
