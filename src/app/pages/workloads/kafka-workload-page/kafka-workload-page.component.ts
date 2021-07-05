import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-kafka-workload-page',
  templateUrl: './kafka-workload-page.component.html',
  styleUrls: ['./kafka-workload-page.component.scss']
})
export class KafkaWorkloadPageComponent implements OnInit {

  signUpUrl: string;
  kafka: any;
  deployLink: string;

  constructor(private utils: UtilsService) { }

  ngOnInit() {

    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.kafka = {
      intro: null,
      whyWorkload: null,
      workloadJourney: {
        title: `Deploying Kafka on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Before starting`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/kafka-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Preconfiguration `,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/kafka-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Getting Started with OpenEBS`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/kafka-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Installing Kudo Operator`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/kafka-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Installing Kudo Kafka`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/kafka-workload/step5.md`
          },
          {
            stepNumber: 6,
            stepTitle: `Monitoring Kudo Kafka`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/kafka-workload/step6.md`
          }
        ]
      },
      operators: null,
      benefits: null,
      resources: {
        title: `Useful Kafka Resources`,
        subtitle: ``,
        resourceList: [
          {
            title: `Use OpenEBS Underneath your Apache Kafka Brokers`,
            description: `Running Apache Kafka on Kubernetes the easy way.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://blog.mayadata.io/apache-kafka-on-kubernetes`
            }
          }
        ]
      },
      partners: {
        title: ``,
        description: ``,
        partner: {
          imgSrc: `assets/images/workloads/kafka/confluent-and-mayadata.svg`,
          imgAlt: `Confluent and MayaData`,
          title: ``,
          descriptions: [
            `MayaData has partnered with Confluent to verify OpenEBS Enterprise Platform and Confluent integration. With our strong partnership, we deliver trusted, end-to-end-hardened Kafka solution to enterprises`
          ]
        }
      },
      events: {
        title: null,
        subtitle: null,
        currentEvent: null,
        pastEvents: null
      },
      support: {
        title: `Enterprise Support`,
        descriptions: [
          `Need enterprise support for OpenEBS under Kafka and other workloads?`
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
