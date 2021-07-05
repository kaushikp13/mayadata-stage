import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  privacyPolicy = {
    title: `MayaData Privacy Policy`,
    date: `Feb 28, 2019`,
    markdownSrc: `./assets/data/pages/privacy-policy.md`
  }

}
