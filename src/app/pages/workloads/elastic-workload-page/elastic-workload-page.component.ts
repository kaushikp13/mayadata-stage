import { Component, OnInit } from '@angular/core';
import { openEBS_Companies } from '../../../contents/pages/openEBS-support';
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-elastic-workload-page',
  templateUrl: './elastic-workload-page.component.html',
  styleUrls: ['./elastic-workload-page.component.scss']
})
export class ElasticWorkloadPageComponent implements OnInit {

  signUpUrl: string;
  efk: any;
  deployLink: string;
  companies = {
    title: `Elasticsearch is used in production on OpenEBS by companies like`,
    list: [
      {
        name: 'cncf',
        imageSrc: 'assets/data/elastic-workload/images/cncf.svg'
      },
      {
        name: 'ByteDance (Creator of Tiktok)',
        imageSrc: 'assets/data/elastic-workload/images/bytedance.png'
      },
      {
        name: 'KubeSphere',
        imageSrc: 'assets/data/elastic-workload/images/kubesphere.png'
      },
      {
        name: 'Lockheed_Martin',
        imageSrc: 'assets/data/elastic-workload/images/Lockheed_Martin.png'
      },
      {
        name: 'optoro',
        imageSrc: 'assets/data/elastic-workload/images/optoro.svg'
      }
    ],
  };


  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.efk = {
      intro: {
        title: "Complete Guide to Run Elasticsearch on Kubernetes",
        subtitle: "Follow the step by step guide below to deploy Elasticsearch on Kubernetes.",
        // video: true
        // cta: {
        //   ctaText: "Get Started",
        //   ctaLink: null
        // }
      },
      whyWorkload: {
        title: "Why Elasticsearch/EFK on Kubernetes?",
        description: `<p>Elasticsearch is an open-source tool that ingests application data, indexes it then stores it for analytics.</p>
        
        <p>Since it gathers large volumes of data while indexing different data types, Elasticsearch is often considered write-heavy. To manage such dynamic volumes of data, Kubernetes can make it easier to configure, manage, and scale Elasticsearch clusters. Kubernetes also simplifies the provisioning of resources for Elasticsearch using Infrastructure-as-Code configurations, abstracting cluster management, and increasing the automation and repeatability of your deployments.</p> 

<p>The Elasticsearch operator by Elastic, called Elastic Cloud on Kubernetes, or ECK, has many capabilities to assist in the ongoing operations of Elastic on Kubernetes including:</p>
<ul>
  <li>1. Managing & monitoring many clusters</li>
  <li>2. Scaling cluster capability up & down</li>
  <li>3. Scheduling backups</li>
</ul>

<p>And can be found at: <a href="https://github.com/elastic/cloud-on-k8s" target="_blank">https://github.com/elastic/cloud-on-k8s</a> or on the Operator Hub at: <a href="https://operatorhub.io/operator/elastic-cloud-eck" target="_blank">https://operatorhub.io/operator/elastic-cloud-eck</a>  </p>
`
      },
      workloadJourney: {
        title: `Deploying ElasticSearch / EFK on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Before starting`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Preconfiguration`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Getting Started with OpenEBS`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Installing Kudo Operator`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Installing ElasticSearch using Kudo`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step5.md`
          },
          {
            stepNumber: 6,
            stepTitle: `Installing Kibana`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step6.md`
          },
          {
            stepNumber: 7,
            stepTitle: `Installing Fluentd-ES`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step7.md`
          },
          {
            stepNumber: 8,
            stepTitle: `Monitoring Elastic search`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/elastic-workload/step8.md`
          }
        ]
      },
      operators: {
        title: `Elasticsearch Operators`,
        subtitle: `Mayadata supports multiple operators to run Elasticsearch on Kubernetes`,
        operatorLists: [
          {
            img: `assets/images/workloads/cassandra/kudo.png`,
            title: `Kudo Operators`,
            description: `Kubernetes Universal Declarative Operator is a toolkit that helps to manage stateful applications after they are deployed on Kubernetes Cluster. While Kubernetes already comes in with a lot of built in automation to run simple workloads, KUDO is designed to help complex scenarios.`,
            cta: [
              {
                ctaText: `Read More`,
                ctaLink: `https://kudo.dev/docs/runbooks/cassandra/installing.html#requirements`
              },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `https://github.com/kudobuilder/kudo`
              }
            ]
          },
        ]
      },
      benefits: {
        title: `OpenEBS Dynamic LocalPV Benefits for Elasticsearch`,
        subtitle: `OpenEBS together with Elasticsearch gives a complete logging solution. Many OpenEBS users have shared their experience of using OpenEBS for local storage management in Kubernetes for Elasticsearch, including the Cloud Native Computing Foundation, ByteDance (TikTok), and Zeta Associates (Lockheed Martin).`,
        benefitList: [
          {
            title: `Persistent Volumes`,
            description: [
              `While Kubernetes alone cannot store data generated by a cluster, persistent volumes can be used to sustain it for future use. To help with this, OpenEBS provisions local persistent volumes or LocalPV and allows for data to be stored on physical disks.`
            ],
            image: {
              imageAlt: `Dynamic Cassandra`,
              imageLink: `assets/images/workloads/cassandra/dynamic-cassandra.svg`
            }
          },
          {
            title: `Highly available logs`,
            description: [
              `Even if the node fails or rebooted during upgrades, persistent volumes from OpenEBS continue to be highly available.`
            ],
            image: {
              imageAlt: `Integrations with Cassandra`,
              imageLink: `assets/images/workloads/cassandra/integrations.svg`
            }
          },
          {
            title: `Monitoring Elasticsearch`,
            description: [
              `OpenEBS provides in-depth monitoring and storage for logs. You can check metrics and monitor Elasticsearch instances using Prometheus and Grafana.`
            ],
            image: {
              imageAlt: `Monitoring Cassandra`,
              imageLink: `assets/images/workloads/cassandra/monitoring-cassandra.svg`
            }
          },
          {
            title: `Backup & Restore`,
            description: [
              `OpenEBS allows you to take backup of Elasticsearch to any object storage and restore it to the same or any Kubernetes cluster.`
            ],
            image: {
              imageAlt: `Disaster Recovery for Cassandra`,
              imageLink: `assets/images/workloads/cassandra/disaster-recovery.svg`
            }
          }
        ],
        cta: {
          ctaText: "Learn more about OpenEBS & Support Options",
          ctaLink: `/local-persistent-volume-openebs`
        }
      },
      resources: {
        title: `Resources to help you get up and running with ElasticSearch / EFK and OpenEBS:`,
        subtitle: ``,
        resourceList: [
          {
            title: `Quickly benchmarking Elasticsearch ingestion on Kubernetes`,
            description: `In this blog we look at running Elasticsearch on OpenEBS in an easy way`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://blog.mayadata.io/benchmarking-elasticsearch-on-kubernetes`
            }
          },
          {
            title: `Deploying Elasticsearch on Kubernetes using OpenEBS LocalPV`,
            description: `This step by step  solution guide explains the steps and important considerations for deploying Elasticsearch clusters on Kubernetes using OpenEBS Persistent Volumes.`,
            category: `Solution Guide`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://mayadata.io/assets/pdf/deploying-elasticsearch-using-openebs-localpv.pdf`
            }
          },
          {
            title: `Elasticsearch and OpenEBS LocalPV`,
            description: `In this blog, we explore how OpenEBS Local PV can provision data storage for Elasticsearch clusters.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://blog.mayadata.io/deploy-elasticsearch-on-kubernetes-using-openebs-localpv`
            }
          }
        ]
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
          `Need enterprise support for OpenEBS under ElasticSearch/EFK and other workloads?`
        ],
        ctas: [
          {
            ctaText: `Talk to us`,
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
