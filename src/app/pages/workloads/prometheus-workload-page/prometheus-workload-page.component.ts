import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-prometheus-workload-page',
  templateUrl: './prometheus-workload-page.component.html',
  styleUrls: ['./prometheus-workload-page.component.scss']
})
export class PrometheusWorkloadPageComponent implements OnInit {

  signUpUrl: string;
  prometheus: any;
  deployLink: string;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.prometheus = {
      intro: null,
      whyWorkload: null,
      workloadJourney: {
        title: `Deploying Prometheus on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Check prerequisites`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/prometheus-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Perform pre-configuration`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/prometheus-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Get started`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/prometheus-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Install Prometheus`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/prometheus-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Monitor Prometheus`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/prometheus-workload/step5.md`
          }
        ]
      },
      operators: null,
      benefits: null,
      resources: null,
      events: {
        title: null,
        subtitle: null,
        currentEvent: null,
        pastEvents: null
      },
      support: {
        title: `Enterprise Support`,
        descriptions: [
          `Need enterprise support for OpenEBS under Prometheus and other workloads?`
        ],
        ctas: [
          {
            ctaText: `Chat Now`,
            ctaLink: `https://help.mayadata.io`
          },
          {
            ctaText: `Contact Us`,
            ctaLink: `/contactus`
          }
        ]

      }
    }
  }

}
