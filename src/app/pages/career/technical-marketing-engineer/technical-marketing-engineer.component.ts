import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-marketing-engineer',
  templateUrl: './technical-marketing-engineer.component.html',
  styleUrls: ['./technical-marketing-engineer.component.scss']
})
export class TechnicalMarketingEngineerComponent implements OnInit {

  technicalMarketing: any = {
    title: "Technical Marketing Engineer",
    job_location: "Any Location (offices available in London and Bangalore)",
    job_type: "Full Time",
    contentPath: "/assets/data/careers/technical_marketing_engineer.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
