import { Component, OnInit, AfterViewInit } from '@angular/core';
import { webinars } from "../../../contents/webinars";
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-cassandra',
  templateUrl: './cassandra.component.html',
  styleUrls: ['./cassandra.component.scss']
})
export class CassandraComponent implements OnInit, AfterViewInit {
  signUpUrl: string;
  cassandra: any;
  deployLink: string;
  constructor(private utils: UtilsService) {
  }

  ngOnInit() {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.cassandra = {
      intro: {
        title: "Complete Guide to Run Cassandra on Kubernetes",
        subtitle: "Follow the step by step guide below to deploy Cassandra on Kubernetes.",
        video: true
        // cta: {
        //   ctaText: "Get Started",
        //   ctaLink: null
        // }
      },
      whyWorkload: {
        title: "Why Cassandra on Kubernetes",
        description: "Cassandra as a NoSQL database is well suited to the high availability and scalability needs of cloud based applications and it is massively adopted now. With the skyrocketing popularity of Kubenetes, it is no surprise that many developers are running Cassandra on Kubernetes for managing data on Kubernetes."
      },
      workloadJourney: {
        title: `Deploying Cassandra on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Prerequisites`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/cassandra-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Pre Config`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/cassandra-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Get started`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/cassandra-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Install Cassandra`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/cassandra-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Monitoring`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/cassandra-workload/step5.md`
          }
        ]
      },
      operators: {
        title: `Cassandra Operators`,
        subtitle: `MayaData supports multiple operators to run Cassandra on Kubernetes`,
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
          {
            img: `assets/images/workloads/cassandra/datastax.png`,
            title: `DataStax Operators`,
            description: `DataStax is a hybrid database-as-a-service built on Apache Cassandra. DataStax built on Apache Cassandra gives you the freedom to run your data on any device and in any cloud.`,
            cta: [
              {
                ctaText: `Read More`,
                ctaLink: `https://datastax.com`
              },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `https://github.com/datastax/`
              }
            ]
          }
        ]
      },
      benefits: {
        title: `OpenEBS Benefits for Cassandra`,
        subtitle: `If you are running stateful applications like Cassandra, then OpenEBS and its various storage engines can help in simplifying the usage in many ways:`,
        benefitList: [
          {
            title: `Persistent Volumes`,
            description: [
              `OpenEBS Dynamic LocalPV provides persistent volumes on the fly. With OpenEBS persistent volumes provisioned dynamically, disks and cloud volumes can be discovered, pooled, and provisioned.`
            ],
            image: {
              imageAlt: `Persistent Volumes`,
              imageLink: `assets/images/workloads/cassandra/persistent-volumes.svg`
            }
          },
          {
            title: `Low Latency Performance`,
            description: [
              `Recent benchmarking with Datastax Cassandra & OpenEBS showed extreme low latency performance in the range of 1.5-2.0 ms and high row & partition rates of upto 3 Million writes on Datastax Cassandra.`
            ],
            image: {
              imageAlt: `Low Latency Performance`,
              imageLink: `assets/images/workloads/cassandra/low-latency-performance.svg`
            }
          },
          {
            title: `Highly available storage`,
            description: [
              `In some cases such as Cassandra deployments where the replication factor is low or where the cost of recovering and bootstrapping a node may be high, it may be beneficial to use block level synchronous replicas from OpenEBS.`
            ],
            image: {
              imageAlt: `Highly available storage`,
              imageLink: `assets/images/workloads/cassandra/highly-available-storage.svg`
            }
          },
          {
            title: `Increased density`,
            description: [
              ` Through the use of OpenEBS localPV and Kubernetes, Cassandra can be safely provisioned in such a way that nodes are shared.  In this way for example multiple Cassandra rings can share the same underlying devices while OpenEBS addresses the scheduling to ensure data locality, provisioning, device pooling and more.  This increased density can dramatically improve the economics and decrease the carbon footprint of a deployment.`
            ],
            image: {
              imageAlt: `Increased density`,
              imageLink: `assets/images/workloads/cassandra/increased-density.svg`
            }
          }
        ],
        cta: {
          ctaText: "Learn more about OpenEBS & Support Options",
          ctaLink: `/local-persistent-volume-openebs`
        }
      },
      resources: {
        title: `Useful Cassandra Resources`,
        subtitle: ``,
        resourceList: [
          {
            title: `Datastax Cassandra using OpenEBS ZFS Local PV in EKS`,
            description: `All you need is a Kubernetes Cluster. We will be using EKS where we will install Datastax Cassandra using the Kubectl method.`,
            category: `Solution Guide`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://mayadata.io/assets/pdf/datastax-cassandra-and-openebs-zfs.pdf`
            }
          },
          {
            title: `Datastax Cassandra using OpenEBS ZFS Local PV in GKE`,
            description: `We will be using GKE where we will install Datastax Cassandra using the Kubectl method.`,
            category: `Solution Guide`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://mayadata.io/assets/pdf/datastax-cassandra-and-openebs.pdf`
            }
          },
          // {
          //   title: `Using Litmus to build CI pipelines for Cassandra when using OpenEBS`,
          //   description: `In this blog, we will detail some of the Litmus jobs that are related to Cassandra.`,
          //   category: `Blog`,
          //   cta: {
          //     ctaText: 'Read More',
          //     ctaLink: `https://blog.mayadata.io/openebs/using-litmus-to-build-ci-pipelines-for-cassandra-when-using-openebs`
          //   }
          // },
          // {
          //   title: `Cassandra Chaos Engineering with Litmus`,
          //   description: `In this blog, we will talk about chaos engineering on Cassandra with the help of Litmus.`,
          //   category: `Blog`,
          //   cta: {
          //     ctaText: 'Read More',
          //     ctaLink: `https://dev.to/ispeakc0de/cassandra-chaos-engineering-with-litmus-31fn`
          //   }
          // },
          {
            title: `OpenEBS for Cassandra`,
            description: `In this docs page, we will talk about the advantages of using OpenEBS for Cassandra database, deployment model and configuration workflow.`,
            category: `Docs`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://docs.openebs.io/docs/next/cassandra.html`
            }
          },
          {
            title: `How to deploy a Cassandra Cluster on Kubernetes + OpenEBS`,
            description: `In this blog, we will learn about the steps to deploy a cassandra cluster on Kubernetes with the help of OpenEBS.`,
            category: `Blog`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://openebs.io/blog/how-to-deploy-a-cassandra-cluster-ring-on-kubernetes-openebs/`
            }
          },
          {
            title: `Cassandra Pod delete experiment details`,
            description: `Gain confidence in how your app reacts when a container crashes or is forcefully shutdown.`,
            category: `Docs`,
            cta: {
              ctaText: 'Read More',
              ctaLink: `https://docs.litmuschaos.io/docs/cassandra-pod-delete/`
            }
          }
        ]
      },
      events: {
        title: `Cassandra Events & Webinar`,
        subtitle: `MayaData regularly attends worldwide events and organizes resourceful webinars to interact with our audience to share knowledge & resources and announce exciting product updates, launches and releases.`,
        currentEvent: {
          dateDesc: `Live Event - 10th-11th December 2020`,
          eventStartDateAndTime: new Date(2020, 12, 10, 0, 0, 0),
          eventFinishDateAndTime: new Date(2020, 12, 11, 23, 59, 59),
          title: `We are proud to be the sponsor of K8s+Cloud Native Mixer- Holiday Edition scheduled to be held on 10th-11th December, 2020.`,
          description: `Join us and other Kubernetes & Cloud native peers virtually at K8s+ Cloud Native Mixer- Holiday Edition for 1:1 conversations, round table networking and product demos.`,
          cta: {
            ctaText: `Register Now`,
            ctaLink: `https://www.eventbrite.com/e/k8s-cloud-native-mixer-registration-125912719333?aff=Mayadata`
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
          `Need enterprise support for OpenEBS under Cassandra and other workloads?`
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

  ngAfterViewInit() {

  }



}
