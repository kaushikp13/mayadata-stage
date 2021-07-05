import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";
@Component({
  selector: 'app-kubera-pricing-models',
  templateUrl: './kubera-pricing-models.component.html',
  styleUrls: ['./kubera-pricing-models.component.scss']
})
export class KuberaPricingModelsComponent implements OnInit {

  marked = false;
  protalUrl: string;
  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.protalUrl = `${this.utils.websites().portalUrl}`;
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }


}
