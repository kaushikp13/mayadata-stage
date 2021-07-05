import { map, filter, mergeMap } from "rxjs/operators"
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SeoService } from './services/seo/seo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MayaData';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      let pageUrl: any = window.location.href;
      let parameters = pageUrl.split('#');
      if (parameters[1] == 'weavescope' || parameters[1] == 'ndm' || parameters[1] == 'velero') {
        pageUrl = parameters[0] + "#kubernetes";
      }
      const { title, url, description, image } = event
      this.seoService.updateTitle(title);
      this.seoService.updateMeta({ title, url: pageUrl, description, image: window.location.origin + image });
      // let seoData = event['seo'];
      // this.seoService.updateTitle(seoData['title']);
      // seoData['metaTags'][4].content = pageUrl;
      // this.seoService.updateMetaTags(seoData['metaTags']);
      this.createLinkForCanonicalURL(pageUrl);

    });

  }

  // Attach canonical link tag to every page
  createLinkForCanonicalURL(url) {
    this.seoService.createLinkForCanonicalURL(url);
  }
}
