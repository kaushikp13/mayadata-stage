import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-career-template',
  templateUrl: './career-template.component.html',
  styleUrls: ['./career-template.component.scss']
})
export class CareerTemplateloadComponent implements OnInit {

  @Input("data") careerHeader;
  constructor() { }

  ngOnInit() {
  }

  onError(e) {
    console.log(e);
  }


}
