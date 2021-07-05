import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usecase-issues',
  templateUrl: './usecase-issues.component.html',
  styleUrls: ['./usecase-issues.component.scss']
})
export class UsecaseIssuesComponent implements OnInit {

  @Input("data") issues;

  constructor() { }

  ngOnInit() {
  }

}
