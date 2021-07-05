import { Component, OnInit } from '@angular/core';
import { webinars } from "../../../contents/webinars"
// current events - webinarss


@Component({
  selector: 'app-homepage-kubera-events',
  templateUrl: './homepage-kubera-events.component.html',
  styleUrls: ['./homepage-kubera-events.component.scss']
})
export class HomepageKuberaEventsComponent implements OnInit {

  homepageEventsRss = {
    current: webinars[0],
    past: webinars.slice(1, 5),
  };
  events = {
    title: `Events & More`,
    currentEvent: this.homepageEventsRss.current,
    pastEvents: this.homepageEventsRss.past
  };

  iswebinarover: boolean;

  constructor() {
    this.iswebinarover = this.homepageEventsRss.current.iswebinarOver;
  }

  ngOnInit() {
  }


}
