import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-magento-workload-page',
  templateUrl: './magento-workload-page.component.html',
  styleUrls: ['./magento-workload-page.component.scss']
})
export class MagentoWorkloadPageComponent implements OnInit {

  signUpUrl: string;
  magento: any;
  deployLink: string;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.magento = {
      intro: null,
      whyWorkload: null,
      workloadJourney: {
        title: `Deploying Magento on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Before starting`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/magento-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Preconfiguration`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/magento-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Getting Started with OpenEBS`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/magento-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Deploy OpenEBS NFS Provisioner`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/magento-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Installing Magento`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/magento-workload/step5.md`
          },
          {
            stepNumber: 6,
            stepTitle: `Monitoring Magento Web Service with Prometheus`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/magento-workload/step6.md`
          },
          {
            stepNumber: 7,
            stepTitle: `Conclusion`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/magento-workload/step7.md`
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
          `Need enterprise support for OpenEBS under Magento and other workloads?`
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
