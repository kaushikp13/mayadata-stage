import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-software-engineer',
  templateUrl: './principal-software-engineer.component.html',
  styleUrls: ['./principal-software-engineer.component.scss']
})
export class PrincipalSoftwareEngineerComponent implements OnInit {

  principleSoftwareEngineer: any = {
    title: "Principal Software Engineer",
    job_location: "Remote",
    job_type: "Full Time",
    contentPath: "/assets/data/careers/principal-software-engineer.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
