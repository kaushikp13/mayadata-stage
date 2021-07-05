import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-writer',
  templateUrl: './technical-writer.component.html',
  styleUrls: ['./technical-writer.component.scss']
})
export class TechnicalWriterComponent implements OnInit {

  technicalWriter: any = {
    title: "Technical Writer",
    job_location: " Any Location (offices available in London and Bangalore)",
    job_type: "Full Time",
    contentPath: "assets/data/careers/technical-writer.md",
    back_url: "/careers"
  };
  constructor() { }

  ngOnInit() {
  }

}
