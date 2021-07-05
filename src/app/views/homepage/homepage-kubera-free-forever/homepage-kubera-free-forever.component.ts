import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";
@Component({
  selector: 'app-homepage-kubera-free-forever',
  templateUrl: './homepage-kubera-free-forever.component.html',
  styleUrls: ['./homepage-kubera-free-forever.component.scss']
})
export class HomepageKuberaFreeForeverComponent implements OnInit {
  signUpUrl: string;
  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
  }

}
