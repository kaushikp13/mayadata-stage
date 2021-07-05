import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockroach-workload-page',
  templateUrl: './cockroach-workload-page.component.html',
  styleUrls: ['./cockroach-workload-page.component.scss']
})
export class CockroachWorkloadPageComponent implements OnInit {
  cockroachDB: any;
  // companies = {
  //   title: `CockroachDB is used in production on OpenEBS by companies like`,
  //   list: [
  //     {
  //       name: 'cncf',
  //       imageSrc: 'assets/data/elastic-workload/images/cncf.svg'
  //     },
  //     {
  //       name: 'ByteDance (Creator of Tiktok)',
  //       imageSrc: 'assets/data/elastic-workload/images/bytedance.png'
  //     },
  //     {
  //       name: 'KubeSphere',
  //       imageSrc: 'assets/data/elastic-workload/images/kubesphere.png'
  //     },
  //     {
  //       name: 'Lockheed_Martin',
  //       imageSrc: 'assets/data/elastic-workload/images/Lockheed_Martin.png'
  //     },
  //     {
  //       name: 'optoro',
  //       imageSrc: 'assets/data/elastic-workload/images/optoro.svg'
  //     }
  //   ],
  // };
  constructor() { }

  ngOnInit() {
    this.cockroachDB = {
      intro: {
        title: "Complete Guide to Run CockroachDB on Kubernetes",
        subtitle: "Follow this step by step guide to deploy CockroachDB on Kubernetes.",
        video: false
        // cta: {
        //   ctaText: "Get Started",
        //   ctaLink: null
        // }
      },
      whyWorkload: {
        title: "Why CockroachDB on Kubernetes?",
        description: "CockroachDB is a cloud-native SQL database that features both scalability and consistency. The database is designed to withstand data center failures by deploying multiple instances of symmetric nodes in a cluster consisting of several machines, disks, and data centers. Kubernetes’ built-in capabilities to scale and survive node failures as extended by Container Attached Storage make it well suited to orchestrate CockroachDB’s databases. CockroachDB can be used for SQL semantics & ACID consistency with Kubernetes."
      },
      workloadJourney: {
        title: `Deploying CockroachDB on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Before starting`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Preconfiguration`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Getting Started with OpenEBS`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Installing CockroachDB Operator`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Accessing CockroachDB`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step5.md`
          },
          {
            stepNumber: 6,
            stepTitle: `Monitoring CockroachDB`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step6.md`
          },
          {
            stepNumber: 7,
            stepTitle: `Conclusion`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/cockroach-workload/step7.md`
          }
        ]
      },
      operators: {
        title: `CockroachDB Operators`,
        subtitle: `Mayadata’s OpenEBS works well with any operator  that helps to run CockroachDB on Kubernetes`,
        operatorLists: [
          {
            img: `assets/data/cockroach-workload/images/cockroach-db.png`,
            title: `CockroachDB Kubernetes Operator`,
            description: `<p>The CockroachDB Kubernetes Operator deploys CockroachDB on a Kubernetes cluster. You can use the Operator to manage the configuration of a running CockroachDB cluster, including:</p>
            <ul>
            <li>Authenticating certificates</li>
            <li>Configuring resource requests and limits</li>
            <li>Scaling the cluster</li>
            <li>Performing a rolling upgrade</li>
            </ul>`,
            cta: [
              // {
              //   ctaText: `Read More`,
              //   ctaLink: `https://kudo.dev/docs/runbooks/cassandra/installing.html#requirements`
              // },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `https://github.com/cockroachdb/cockroach-operator#:~:text=The%20CockroachDB%20Kubernetes%20Operator%20deploys,Configuring%20resource%20requests%20and%20limits`
              }
            ]
          }
        ]
      },
      benefits: {
        title: `OpenEBS Dynamic LocalPV Benefits for CockroachDB`,
        subtitle: `OpenEBS Dynamic LocalPV improves the operations of  CockroachDB on Kubernetes. When compared to native Kubernetes Local Persistent Volumes, OpenEBS LocalPV volumes have the following advantages:`,
        benefitList: [
          {
            title: `Simplicity and Control`,
            description: [
              `CockroachDB is an inherently resilient database that does not benefit from the complexity and shared dependencies of shared storage and is a perfect fit for Container Attached Storage.`
            ],
            image: {
              imageAlt: `Simplicity and control`,
              imageLink: `assets/data/cockroach-workload/images/simplicity-and-control.svg`
            }
          },
          {
            title: `Dynamic Management of Storage Devices`,
            description: [
              `OpenEBS LocalPV automates  Storage Devices, the tagging and filtering of these devices, and pooling and other configurations - dynamically, as needed by CockroachDB.`
            ],
            image: {
              imageAlt: `Dynamic Management of Storage Devices`,
              imageLink: `assets/data/cockroach-workload/images/dynamic-management-of -storage-devices.svg`
            }
          },
          {
            title: `Holistic Management`,
            description: [
              `OpenEBS is a widely deployed storage layer - and workflows such as capacity management and compliance reporting are simple to manage from common open source tools such as Grafana. Also, MayaData integrates and supports such workflows as a part of support for OpenEBS.`
            ],
            image: {
              imageAlt: `Holistic management`,
              imageLink: `assets/data/cockroach-workload/images/holistic-management.svg`
            }
          }
        ],
        cta: {
          ctaText: "Learn more about OpenEBS & Support Options",
          ctaLink: `/local-persistent-volume-openebs`
        }
      },
      resources: {
        title: `Useful CockroachDB Resources`,
        subtitle: ``,
        resourceList: [
          {
            title: `Deploying CockroachDB on Kubernetes using Dynamic OpenEBS LocalPV`,
            description: `Step by step solution guide explains the steps and important considerations for deploying CockroachDB on Kubernetes using Dynamically Provisioned OpenEBS Local Persistent Volumes.`,
            category: `Solution Guide`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://mayadata.io/assets/pdf/deploying-cockroachdb-using-openebs.pdf`
            }
          },
          {
            title: `CockroachDB and Dynamic OpenEBS LocalPV`,
            description: `In this blog, we summarize the steps to deploy CockroachDB on Kubernetes using OpenEBS LocalPV and explore how OpenEBS LocalPV devices can be used to persist storage for CockroachDB clusters.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://blog.mayadata.io/deploying-cockroachdb-on-kubernetes-using-openebs-localpv`
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
          `Need enterprise support for OpenEBS under CockroachDB and other workloads?`
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
