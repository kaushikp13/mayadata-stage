import { Component, OnInit } from '@angular/core';
import { local_persistent_companies, local_persistent_features } from '../../contents/pages/local-persistent-volumes';

@Component({
  selector: 'app-local-persistent-volumes',
  templateUrl: './local-persistent-volumes.component.html',
  styleUrls: ['./local-persistent-volumes.component.scss']
})
export class LocalPersistentVolumesComponent implements OnInit {

  companies = local_persistent_companies;
  features = local_persistent_features;
  Tab1: boolean = true;
  Tab2: boolean = false;
  Tab3: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectTab(value) {
    if (value === 'Tab1') {
      this.Tab1 = true;
      this.Tab2 = false;
      this.Tab3 = false;
    }
    if (value === 'Tab2') {
      this.Tab1 = false;
      this.Tab2 = true;
      this.Tab3 = false;
    }
    if (value === 'Tab3') {
      this.Tab1 = false;
      this.Tab2 = false;
      this.Tab3 = true;
    }
  }

}
