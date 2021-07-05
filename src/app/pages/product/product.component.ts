import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../services/utils/utils.service"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  signUpUrl: string;
  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
  }

}
