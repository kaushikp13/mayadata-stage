import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licences',
  templateUrl: './licences.component.html',
  styleUrls: ['./licences.component.scss']
})
export class LicencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = "https://github.com/mayadata-io/licenses/blob/master/licenses.summary.md"
  }

}
