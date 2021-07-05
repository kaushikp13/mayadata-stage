import { Component, OnInit } from '@angular/core';
import { webinars } from "../../../contents/webinars";
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-percona-workload-page',
  templateUrl: './percona-workload-page.component.html',
  styleUrls: ['./percona-workload-page.component.scss']
})
export class PerconaWorkloadPageComponent implements OnInit {

  signUpUrl: string;
  percona: any;
  deployLink: string;
  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.percona = {
      intro: {
        title: "Complete guide to run Percona on Kubernetes",
        subtitle: "Follow the step by step guide to deploy Percona on Kubernetes.",
        cta: {
          ctaText: "Get Started",
          ctaLink: "mailto:maria@percona.com"
        },
        video: false
      },
      whyWorkload: {
        title: "Why Percona on Kubernetes?",
        description: "Percona is a leading open source database solutions provider. They optimize database performance and reduce risk, and minimize operational cost and complexity in running databases."
      },
      workloadJourney: {
        title: `Deploying Percona on Kubernetes`,

        steps: [
          {
            stepNumber: 1,
            stepTitle: `Before starting`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/percona-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Perform pre-configuration`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/percona-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Get started`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/percona-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Installing Percona XtraDB Cluster`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/percona-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Monitoring Percona XtraDB cluster using PMM`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/percona-workload/step5.md`
          }
        ]
      },
      operators: {
        title: `Percona Operators`,
        subtitle: `Percona Kubernetes Operators save time and deliver a consistent environment by automating deployments, scaling, and backup and restore operations.`,
        operatorLists: [
          {
            img: null,
            title: `Percona Server for MongoDB`,
            description: `Helps in automating the creation, deletion and modification of items in any Percona Server for MongoDB environment.  As with all Percona software, the Operator comes with finely tuned settings to maximize performance.`,
            cta: [
              {
                ctaText: `Read More`,
                ctaLink: `https://www.percona.com/software/percona-kubernetes-operators`
              },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `https://github.com/percona/percona-server-mongodb-operator`
              }
            ]
          },
          {
            img: null,
            title: `Percona XtraDB Cluster`,
            description: `Helps in the automation of deployments, scaling, backup, and node recovery of the open source MySQL clustered database. Run a MySQL cluster with confidence knowing you have Percona’s craftsmanship at work for you.`,
            cta: [
              {
                ctaText: `Read More`,
                ctaLink: `https://www.percona.com/software/percona-kubernetes-operators`
              },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `https://github.com/percona/percona-xtradb-cluster-operator`
              }
            ]
          }
        ]
      },
      benefits: {
        title: `OpenEBS Benefits for Percona`,
        subtitle: `If you run Percona on Kubernetes with OpenEBS, it helps in simplifying and scaling the usage in many ways.`,
        benefitList: [
          {
            title: `Data Replication`,
            description: [
              ` Data is replicated across three nodes and zones which helps in availability of persistent data in case of node upgrades and node failures.`
            ],
            image: {
              imageAlt: `Data Replication`,
              imageLink: `assets/images/workloads/cassandra/dynamic-cassandra.svg`
            }
          },
          {
            title: `Dynamic Volume Provisioning`,
            description: [
              `For Percona Kubernetes Operators, Dynamic Local Provisioning and Local Persistent Volumes need to be combined. OpenEBS Local PV Hostpath is the <a href="https://www.percona.com/blog/2020/10/01/deploying-percona-kubernetes-operators-with-openebs-local-storage/"> Percona CTO’s go-to method to deploy clusters with the local storage.</a>`
            ],
            image: {
              imageAlt: `Dynamic Volume Provisioning`,
              imageLink: `assets/images/workloads/cassandra/integrations.svg`
            }
          },
          {
            title: `Configure for speed or efficiency`,
            description: [
              `OpenEBS makes it possible to apply granular policies to resources like memory, CPU, and various disk options. Easily build for speed or cost savings, whichever best suits your workload.`
            ],
            image: {
              imageAlt: `Configure for speed or efficiency`,
              imageLink: `assets/images/workloads/cassandra/monitoring-cassandra.svg`
            }
          },
          {
            title: `Capitalize on the Latest Tech with OpenEBS Mayastor`,
            description: [
              `Databases are often IO bound, but not with the latest storage of OpenEBS- Mayastor. We use the whole NVMe drive. Synthetic tests show Mayastor <a href="https://www.percona.com/community-blog/2020/10/23/mayastor-lightning-fast-storage-for-kubernetes/"> hosting 2 DB instances on a single NVMe trivially achieving throughput of 1.1GB/s, with 52k IOPs.</a>`,
              `Note: OpenEBS Mayastor is still in Beta stage.`
            ],
            image: {
              imageAlt: `Capitalize on the Latest Tech with OpenEBS Mayastor`,
              imageLink: `assets/images/workloads/cassandra/disaster-recovery.svg`
            }
          },
        ],
        cta: {
          ctaText: "Learn more about OpenEBS & Support Options",
          ctaLink: `/openebs-support`
        }
      },
      resources: {
        title: `Useful Percona Resources`,
        subtitle: ``,
        resourceList: [
          {
            title: `Measuring OpenEBS local volume performance overhead in Kubernetes`,
            description: `Read this blog by Percona CTO, Vadim Tkachenko where he examines OpenEBS local volume performance.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://www.percona.com/blog/2020/11/12/measuring-openebs-local-volume-performance-overhead-in-kubernetes/`
            }
          },
          {
            title: `Deploying Percona Kubernetes operators with OpenEBS local storage`,
            description: `Read this blog by Percona CTO, Vadim Tkachenko where he explores ways to deploy Percona XtraDB Cluster and Percona Server for MongoDB with OpenEBS local storage.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://www.percona.com/blog/2020/10/01/deploying-percona-kubernetes-operators-with-openebs-local-storage/`
            }
          },
          {
            title: `OpenEBS for management of Kubernetes storage volumes`,
            description: `Read this blog by Percona CTO, Vadim Tkachenko where he takes a look at OpenEBS as a general management solution for Kubernetes.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://www.percona.com/blog/2020/11/09/openebs-for-the-management-of-kubernetes-storage-volumes/`
            }
          },
          {
            title: `Mayastor- Lighting fast storage for Kubernetes`,
            description: `Read this blog by Brian Matheson where he tests the lightning fast and high-performance output of Mayastor using Percona distribution for MySQL.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://www.percona.com/community-blog/2020/10/23/mayastor-lightning-fast-storage-for-kubernetes/`
            }
          },
        ]
      },
      events: {
        title: `Percona Events & Webinar`,
        subtitle: `MayaData regularly attends worldwide events and organizes resourceful webinars to interact with our audience to share knowledge & resources and announce exciting product updates, launches and releases.`,
        currentEvent: {
          dateDesc: `Live Event - 17th to 20th November 2020`,
          eventStartDateAndTime: new Date(2020, 10, 17, 0, 0, 0),
          eventFinishDateAndTime: new Date(2020, 10, 20, 23, 59, 59),
          title: `Visit the creators of OpenEBS & Litmus Chaos virtually at KubeCon NA 2020`,
          description: `We are proud to be the gold sponsor of KubeCon NA 2020 scheduled to be held on 17th - 20th November, 2020. Stay tuned for more updates.`,
          cta: {
            ctaText: `Read More`,
            ctaLink: `https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/`
          },
          img: {
            imgAlt: `A guy participating in an event`,
            imgSrc: `assets/images/workloads/cassandra/event.png`
          }
        },
        pastEvents: {
          title: `Past Events`,
          events: [
            ...webinars.filter((res, index) => index <= 4)
          ]
        }
      },
      support: {
        title: `Enterprise Support`,
        descriptions: [
          `Need enterprise support for OpenEBS under Percona and other workloads?`
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
