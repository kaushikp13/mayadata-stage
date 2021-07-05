import { Component, OnInit } from '@angular/core';
import { advisors, investors, workCulture } from '../../../contents/pages/about';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.scss']
})
export class AdvisorsTeamComponent implements OnInit {
  advisors: any = advisors;

  constructor() { }

  ngOnInit() {
  }

}
