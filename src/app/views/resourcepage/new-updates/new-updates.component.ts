import { Component, OnInit } from '@angular/core';
import { casestudies } from '../../../../app/contents/casestudies';
@Component({
  selector: 'app-new-updates',
  templateUrl: './new-updates.component.html',
  styleUrls: ['./new-updates.component.scss']
})
export class NewUpdatesComponent implements OnInit {

  latestUpdate: any;
  constructor() {
    this.latestUpdate = casestudies[0];
  }

  ngOnInit() {
  }

}
