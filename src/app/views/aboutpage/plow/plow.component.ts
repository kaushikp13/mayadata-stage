import { Component, OnInit } from '@angular/core';
import { workCulture } from '../../../contents/pages/about';

@Component({
  selector: 'app-plow',
  templateUrl: './plow.component.html',
  styleUrls: ['./plow.component.scss']
})
export class PlowComponent implements OnInit {

  // data

  workCulture: any = workCulture;

  constructor() { }

  ngOnInit() {
  }

}
