import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usecase-cta',
  templateUrl: './usecase-cta.component.html',
  styleUrls: ['./usecase-cta.component.scss']
})
export class UsecaseCtaComponent implements OnInit {
  @Input("data") cta;
  constructor() { }

  ngOnInit() {
  }

}
