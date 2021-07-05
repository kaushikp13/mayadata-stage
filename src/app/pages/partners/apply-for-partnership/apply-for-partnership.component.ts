import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apply-for-partnership',
  templateUrl: './apply-for-partnership.component.html',
  styleUrls: ['./apply-for-partnership.component.scss']
})
export class ApplyForPartnershipComponent implements OnInit {

  applyForPartnershipIntro = {
    title: `Interested in becoming a MayaData partner?`,
    description: `We offer deal registration to protect your interests; register your deal below.
    Our pre sales technical support helps architect the right solution, just reach out via Kubera.
    Get pricing from our 24 hour quoting desk and build your proposal. When you close it, we’ll be there.`

  }

  constructor() {
  }

  ngOnInit() { }


}
