import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { leaderContentData, leaderShipTeamMembers } from '../../../contents/pages/about';

@Component({
  selector: 'app-leadership-team',
  templateUrl: './leadership-team.component.html',
  styleUrls: ['./leadership-team.component.scss']
})
export class LeadershipTeamComponent implements OnInit {

  leaderShipTeamMembers: any[] = leaderShipTeamMembers;
  leaderContentData: any[] = leaderContentData;
  selectedContent: any = this.leaderContentData[0];
  firstDatacurve: boolean = true;
  lastDatacurve: boolean = false;

  constructor(private render: Renderer2) { }

  ngOnInit() {
  }

  leaderContent(leader, index) {
    if (index == 0) {
      this.firstDatacurve = true;
    }
    else if (index == 4) {
      this.lastDatacurve = true;
    }
    else {
      this.lastDatacurve = false;
      this.firstDatacurve = false;
    }

    let leaderMemberDetails = this.leaderShipTeamMembers.filter(res => {
      res.active = false;
      return res.leaderid == leader.leaderid;
    });

    if (leaderMemberDetails !== undefined) {
      leaderMemberDetails[0].active = true;
    }

    let leaderDetails = this.leaderContentData.filter(res => {
      res.active = false;
      return res.leaderid == leader.leaderid;
    });

    if (leaderDetails !== undefined) {
      leaderDetails[0].active = true;
      this.selectedContent = leaderDetails[0];
    }
  }

}
