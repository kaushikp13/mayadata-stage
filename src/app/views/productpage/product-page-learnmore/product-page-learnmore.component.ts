import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-product-page-learnmore',
  templateUrl: './product-page-learnmore.component.html',
  styleUrls: ['./product-page-learnmore.component.scss']
})
export class ProductPageLearnmoreComponent implements OnInit {
  signUpUrl: string;
  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`
  }

  ngOnInit() {

  }

}
