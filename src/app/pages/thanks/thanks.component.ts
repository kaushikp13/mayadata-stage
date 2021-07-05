import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilsService } from "../../services/utils/utils.service"
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  signUpUrl: string;
  constructor(private router: Router, private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }

}
