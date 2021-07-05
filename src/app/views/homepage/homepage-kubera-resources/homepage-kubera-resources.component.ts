import { Component, OnInit } from '@angular/core';
import { homepageResourcesRss } from "../../../contents/homepageResourcesRss";
@Component({
  selector: 'app-homepage-kubera-resources',
  templateUrl: './homepage-kubera-resources.component.html',
  styleUrls: ['./homepage-kubera-resources.component.scss']
})
export class HomepageKuberaResourcesComponent implements OnInit {
  MAIN_CARD_INDEX = 0;
  mainCard = this.MAIN_CARD_INDEX;
  workloadResources = {
    title: `Kubera Resources`,
    main: homepageResourcesRss.main,
    resources: homepageResourcesRss.resources
  };
  constructor() { }

  ngOnInit() { }

}
