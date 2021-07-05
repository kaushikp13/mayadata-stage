import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workload-get-started',
  templateUrl: './workload-get-started.component.html',
  styleUrls: ['./workload-get-started.component.scss']
})
export class WorkloadGetStartedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO: sample content, to be removed later when actual content will be added

  getStarted = {
    title: `Get Started with Cassandra`,
    description: ``,
    cta: {
      ctaText: `Get Started`,
      ctaLink: `#`
    }
  }

}
