import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-engineer',
  templateUrl: './solution-engineer.component.html',
  styleUrls: ['./solution-engineer.component.scss']
})
export class SolutionEngineerComponent implements OnInit {

  solutionEngineer: any = {
    title: "Solution Engineer",
    job_location: "Bangalore",
    job_type: "Full Time",
    contentPath: "assets/data/careers/solution-engineer.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
