import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usecase-deploy-using-openebs',
  templateUrl: './usecase-deploy-using-openebs.component.html',
  styleUrls: ['./usecase-deploy-using-openebs.component.scss']
})
export class UsecaseDeployUsingOpenebsComponent implements OnInit {

  @Input("data") deployUsingOpenEBS;
  constructor() { }

  ngOnInit() {
  }

}
