import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { careerPageIntro, job_openings } from '../../../app/contents/pages/career';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  heroImageUrl = 'assets/images/careers/career-bg.png';

  careerPageIntro = careerPageIntro;
  job_openings = job_openings;

  constructor() { }

  ngOnInit() {
  }


}
