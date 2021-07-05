import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kubecon-swag-terms-and-conditions',
  templateUrl: './kubecon-swag-terms-and-conditions.component.html',
  styleUrls: ['./kubecon-swag-terms-and-conditions.component.scss']
})
export class KubeconSwagTermsAndConditionsComponent implements OnInit {

  title = `Terms & Conditions for Swag - KubeCon Europe 2020`;
  constructor() { }

  ngOnInit() {
  }

  onError(e) {
    console.log(e);
  }

}
