import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workloads-hero',
  templateUrl: './workloads-hero.component.html',
  styleUrls: ['./workloads-hero.component.scss']
})
export class WorkloadsHeroComponent implements OnInit {

  @Input('workloadIntro') workloadIntro: any;

  constructor() { }

  ngOnInit() {
  }

}
