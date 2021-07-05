import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-manager',
  templateUrl: './program-manager.component.html',
  styleUrls: ['./program-manager.component.scss']
})
export class ProgramManagerComponent implements OnInit {

  programManager: any = {
    title: "Program Manager",
    job_location: " Any Location (offices available in London and Bangalore)",
    job_type: "Full Time",
    contentPath: "assets/data/careers/program_manager.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
