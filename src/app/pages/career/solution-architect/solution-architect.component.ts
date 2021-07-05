import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-architect',
  templateUrl: './solution-architect.component.html',
  styleUrls: ['./solution-architect.component.scss']
})
export class SolutionArchitectComponent implements OnInit {

  solutionArchitect: any = {
    title: "Solution Architect",
    job_location: " Any Location (offices available in London and Bangalore)",
    job_type: "Full Time",
    contentPath: "assets/data/careers/solution_architect.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
