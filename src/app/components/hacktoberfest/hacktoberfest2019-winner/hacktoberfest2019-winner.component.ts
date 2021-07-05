import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacktoberfest2019-winner',
  templateUrl: './hacktoberfest2019-winner.component.html',
  styleUrls: ['./hacktoberfest2019-winner.component.scss']
})
export class Hacktoberfest2019WinnerComponent implements OnInit {

  weekly_winners = [
    {
      img: "assets/images/hacktoberfest2019/aswath.jpg",
      name: 'Aswath',
      profile: "https://www.linkedin.com/in/aswathkk/"
    },
    {
      img: "assets/images/hacktoberfest2019/jayadeep.jpg",
      name: 'Jayadeep',
      profile: "https://www.linkedin.com/in/kmjayadeep/"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
