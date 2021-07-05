import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-manager',
  templateUrl: './community-manager.component.html',
  styleUrls: ['./community-manager.component.scss']
})
export class CommunityManagerComponent implements OnInit {

  communityManager: any = {
    title: "Community Manager",
    job_location: "Remote (US / Canada)",
    job_type: "Full Time",
    contentPath: "/assets/data/careers/community-manager.md",
    back_url: "/careers"
  };

  constructor() { }

  ngOnInit() {
  }

}
