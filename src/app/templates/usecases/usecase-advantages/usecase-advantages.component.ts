import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usecase-advantages',
  templateUrl: './usecase-advantages.component.html',
  styleUrls: ['./usecase-advantages.component.scss']
})
export class UsecaseAdvantagesComponent implements OnInit {

  @Input("data") advantages;
  constructor() { }

  ngOnInit() {
  }

}
