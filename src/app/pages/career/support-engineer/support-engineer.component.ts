import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-engineer',
  templateUrl: './support-engineer.component.html',
  styleUrls: ['./support-engineer.component.scss']
})
export class SupportEngineerComponent implements OnInit {

  supportEngineer: any = {
    title: "Support Engineer",
    job_location: "Bangalore",
    job_type: "Full Time",
    contentPath: "assets/data/careers/support_engineer.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
