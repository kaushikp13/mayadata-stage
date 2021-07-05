import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-mulebot',
  templateUrl: './mulebot.component.html',
  styleUrls: ['./mulebot.component.scss']
})
export class MulebotComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

}
