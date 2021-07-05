import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usecase-intro',
  templateUrl: './usecase-intro.component.html',
  styleUrls: ['./usecase-intro.component.scss']
})
export class UsecaseIntroComponent implements OnInit {

  @Input("data") intro;

  constructor() { }

  ngOnInit() {
  }

}
