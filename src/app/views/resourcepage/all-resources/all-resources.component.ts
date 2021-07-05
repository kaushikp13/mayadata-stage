import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { casestudies } from "../../../contents/casestudies";
import { solutiondocs } from "../../../contents/solutiondocs";
import { webinars } from "../../../contents/webinars";
import { whitepapers } from "../../../contents/whitepapers";
import { handsons } from "../../../contents/handsons";
import { usecases } from "../../../contents/usecases";
import { opensourceprojects } from '../../../contents/open-source-projects';
import { WHITEPAPER, WEBINAR, SOLUTIONDOCS, CASESTUDY, USECASES, HANDSONS, OPENSOURCEPROJECTS } from "../../../constants/content-types";
@Component({
  selector: 'app-all-resources',
  templateUrl: './all-resources.component.html',
  styleUrls: ['./all-resources.component.scss']
})
export class AllResourcesComponent implements OnInit, AfterViewInit {

  @ViewChild("itemsRefs", { static: true }) itemsRefs;
  resourceItems = [
    {
      name: 'All Topics',
      type: 'all'
    },
    {
      name: 'Use Cases',
      type: USECASES
    },
    {
      name: 'Solutions',
      type: SOLUTIONDOCS
    },
    {
      name: 'Case Studies',
      type: CASESTUDY
    },
    {
      name: 'Whitepapers',
      type: WHITEPAPER
    },
    {
      name: 'Webinars',
      type: WEBINAR
    },
    {
      name: 'Hands-Ons',
      type: HANDSONS
    },
    {
      name: 'Open Source Projects',
      type: OPENSOURCEPROJECTS
    }

  ];

  resources = [];
  caseStudies: any;
  solutionDocs: any;
  webinars: any;
  whitepapers: any;
  handsOns: any;
  usecases: any;
  openSourceProjects: any;
  all: any;
  constructor(private renderer: Renderer2) {
    this.caseStudies = casestudies;
    this.solutionDocs = solutiondocs;
    this.webinars = webinars;
    this.whitepapers = whitepapers;
    this.handsOns = handsons;
    this.usecases = usecases;
    this.openSourceProjects = opensourceprojects;

    this.all = [...casestudies, ...opensourceprojects, ...solutiondocs, ...webinars, ...whitepapers, ...handsons, ...usecases];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.itemsRefs.nativeElement.children[0], "active");
    this.resources = this.getResources("all");
    const childItems = this.itemsRefs.nativeElement.children;
    Array.from(childItems).forEach((item: HTMLElement) => {
      item.addEventListener("click", (e: any) => {
        Array.from(childItems).map((res: HTMLElement) => {
          if (res.classList.contains("active")) {
            res.classList.remove("active");
          }
          if (e.target === res) {
            res.classList.add("active");
          }
        });
        this.resources = this.getResources(e.target.dataset.resourceType);
      });
    });
  }


  getResources(resourceName) {
    if (resourceName === USECASES) {
      return this.usecases;
    }
    if (resourceName === SOLUTIONDOCS) {
      return this.solutionDocs;
    }
    if (resourceName === CASESTUDY) {
      return this.caseStudies;
    }
    if (resourceName === WHITEPAPER) {
      return this.whitepapers;
    }
    if (resourceName === WEBINAR) {
      return this.webinars;
    }
    if (resourceName === HANDSONS) {
      return this.handsOns;
    }
    if (resourceName === OPENSOURCEPROJECTS) {
      return this.openSourceProjects;
    }
    if (resourceName === 'all') {
      return this.all;
    }
  }

}
