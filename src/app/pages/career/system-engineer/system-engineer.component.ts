import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-engineer',
  templateUrl: './system-engineer.component.html',
  styleUrls: ['./system-engineer.component.scss']
})
export class SystemEngineerComponent implements OnInit {

  systemEngineer: any = {
    title: "System Engineer",
    job_location: "Remote",
    job_type: "Full Time",
    contentPath: "/assets/data/careers/system-engineer.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
