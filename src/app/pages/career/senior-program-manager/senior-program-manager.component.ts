import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senior-program-manager',
  templateUrl: './senior-program-manager.component.html',
  styleUrls: ['./senior-program-manager.component.scss']
})
export class SeniorProgramManagerComponent implements OnInit {

  seniorProgramManager: any = {
    title: "Senior Program Manager",
    job_location: "Remote",
    job_type: "Full Time",
    contentPath: "/assets/data/careers/senior-program-manager.md",
    back_url: "/careers"
  };
  constructor() { }

  ngOnInit() {
  }

}
