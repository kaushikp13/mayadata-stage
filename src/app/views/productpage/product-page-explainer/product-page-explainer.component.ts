import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";
@Component({
  selector: 'app-product-page-explainer',
  templateUrl: './product-page-explainer.component.html',
  styleUrls: ['./product-page-explainer.component.scss']
})
export class ProductPageExplainerComponent implements OnInit {

  signUpUrl: string;
  loginUrl: string;
  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.loginUrl = `${this.utils.websites().accountUrl}/login`;
  }

  ngOnInit() {
  }

}
