import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-advocate',
  templateUrl: './developer-advocate.component.html',
  styleUrls: ['./developer-advocate.component.scss']
})
export class DeveloperAdvocateComponent implements OnInit {
  developerAdvocate: any = {
    title: "Developer Advocate",
    job_location: "Remote (Europe / India Time zones)",
    job_type: "Full Time",
    contentPath: "/assets/data/careers/developer-advocate.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
