import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../../services/utils/utils.service"
@Component({
  selector: 'app-comcast',
  templateUrl: './comcast.component.html',
  styleUrls: ['./comcast.component.scss']
})
export class ComcastComponent implements OnInit {

  comcastAndOpenEBS = {
    title: `Comcast uses OpenEBS with Kubernetes for a variety of use cases`,
    intros: [
      `During 2018 and 2019, various groups at Comcast increased their usage of Kubernetes as a data layer and selected OpenEBS as a means to deliver storage services in a Kubernetes native way to their users.`,
      `Comcast uses OpenEBS to run a number of workloads on Kubernetes, including:`
    ],
    workloadsOnOpenEBS: [
      {
        img_url: `assets/images/adopters/prometheus-on-openebs.png`,
        img_alt: `Prometheus On OpenEBS`
      },
      {
        img_url: `assets/images/adopters/grafana-on-openebs.png`,
        img_alt: `Grafana On OpenEBS`
      },
      {
        img_url: `assets/images/adopters/influxdb-on-openebs.png`,
        img_alt: `InfluxDB On OpenEBS`
      }
    ]
  }








  signUpUrl = null;

  comcastIntro = {
    title: 'Comcast',
    descriptions: [
      `Comcast is a Fortune 50 company, one of the word’s largest media and infrastructure companies, and includes such brands such as NBC Universal and Sky.`
    ],
    img: {
      imgSrc: 'assets/images/adopters/comcast.svg',
      imgAlt: 'Comcast'
    }
  };

  usecases = {
    title: `Comcast uses OpenEBS with Kubernetes for a variety of use cases`,
    description: `During 2018 and 2019, various groups at Comcast increased their usage of Kubernetes as a data layer and selected OpenEBS as a means to deliver storage services in a Kubernetes native way to their users.`,
    subtitle: `Comcast uses OpenEBS to run a number of workloads on Kubernetes, including:`,
    img: {
      imgSrc: `assets/images/adopters/comcast-openebs-and-workloads.svg`,
      imgAlt: `Comcast OpenEBS and Workloads`
    }
  }

  comcastAvidUser = {
    title: `Comcast is an avid user of Kubernetes for a variety of use cases, including:`,
    items: [
      `Machine Learning model development and training`,
      `Other software development, testing, and deployment`,
      `Network operations`
    ]
  }




  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
  }

}
