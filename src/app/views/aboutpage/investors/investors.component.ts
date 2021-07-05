import { Component, OnInit } from '@angular/core';
import { investors, workCulture } from '../../../contents/pages/about';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsTeamComponent implements OnInit {
  investors: any = investors;


  constructor() { }

  ngOnInit() {
  }

}
