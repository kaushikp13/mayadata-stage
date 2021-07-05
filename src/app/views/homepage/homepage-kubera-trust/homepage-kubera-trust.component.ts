import { Component, OnInit } from '@angular/core';
import { silderContent } from '../../../../app/contents/pages/home';

@Component({
  selector: 'app-homepage-kubera-trust',
  templateUrl: './homepage-kubera-trust.component.html',
  styleUrls: ['./homepage-kubera-trust.component.scss']
})
export class HomepageKuberaTrustComponent implements OnInit {

  silderContent = silderContent;

  constructor() { }

  ngOnInit() {
  }

}
