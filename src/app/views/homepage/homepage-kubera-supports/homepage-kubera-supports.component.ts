import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";
@Component({
  selector: 'app-homepage-kubera-supports',
  templateUrl: './homepage-kubera-supports.component.html',
  styleUrls: ['./homepage-kubera-supports.component.scss']
})
export class HomepageKuberaSupportsComponent implements OnInit {
  signUpUrl: string;
  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
  }

}
