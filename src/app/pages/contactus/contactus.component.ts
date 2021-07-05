import { Component, OnInit, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  setFormChange_leads = true;
  @Output() isFormChange = new EventEmitter<boolean>();
  isBrowser;
  constructor(@Inject(PLATFORM_ID) private platformId, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (this.isBrowser) {
        window.scrollTo(0, 0);
      }
    });
  }

}
