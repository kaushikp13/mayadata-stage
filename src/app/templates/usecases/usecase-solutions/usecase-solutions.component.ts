import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usecase-solutions',
  templateUrl: './usecase-solutions.component.html',
  styleUrls: ['./usecase-solutions.component.scss']
})
export class UsecaseSolutionsComponent implements OnInit {

  @Input("data") solutions;

  constructor() { }

  ngOnInit() {
  }

}
