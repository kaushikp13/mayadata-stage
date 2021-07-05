import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-resources',
  templateUrl: './workloads-resources.component.html',
  styleUrls: ['./workloads-resources.component.scss']
})
export class WorkloadsResourcesComponent implements OnInit {
  MAIN_CARD_INDEX = 0;
  mainCard = this.MAIN_CARD_INDEX;

  @Input('workloadResources') workloadResources: any;

  constructor() { }

  ngOnInit() {
  }

}
