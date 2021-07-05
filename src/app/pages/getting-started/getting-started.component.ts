import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../services/utils/utils.service"
import { GTM } from "../../constants/constants"
@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  // GTM Triggers Object
  GTM: any;
  signUpUrl: string;
  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
    this.GTM = GTM
  }

}
