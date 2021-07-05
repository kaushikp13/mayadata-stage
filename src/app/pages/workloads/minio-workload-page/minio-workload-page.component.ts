import { Component, OnInit } from '@angular/core';
import { webinars } from "../../../contents/webinars";
import { UtilsService } from "../../../services/utils/utils.service";

@Component({
  selector: 'app-minio-workload-page',
  templateUrl: './minio-workload-page.component.html',
  styleUrls: ['./minio-workload-page.component.scss']
})
export class MinioWorkloadPageComponent implements OnInit {

  signUpUrl: string;
  cassandra: any;
  deployLink: string;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
    this.cassandra = {
      intro: {
        title: " Complete guide to run MinIO on Kubernetes",
        subtitle: "Follow the step by step guide below to deploy Minio on Kubernetes",
        cta: {
          ctaText: "Get Started",
          ctaLink: null
        }
      },
      whyWorkload: {
        title: "Why MinIO on Kubernetes?",
        description: "MinIO is an open source object storage server offering high performance and distributed storage facilities. Deploying MinIO on Kubernetes provides the perfect cloud-native environment to scale sustainability."
      },
      workloadJourney: {
        title: `Deploying MinIO on Kubernetes`,
        steps: [
          {
            stepNumber: 1,
            stepTitle: `Check prerequisites`,
            image_url: `assets/images/workloads/mountain-climber-1.svg`,
            linkToMdFile: `./assets/data/minio-workload/step1.md`
          },
          {
            stepNumber: 2,
            stepTitle: `Perform pre-configuration`,
            image_url: `assets/images/workloads/mountain-climber-2.svg`,
            linkToMdFile: `./assets/data/minio-workload/step2.md`
          },
          {
            stepNumber: 3,
            stepTitle: `Get started`,
            image_url: `assets/images/workloads/mountain-climber-3.svg`,
            linkToMdFile: `./assets/data/minio-workload/step3.md`
          },
          {
            stepNumber: 4,
            stepTitle: `Install MinIO Object Storage`,
            image_url: `assets/images/workloads/mountain-climber-4.svg`,
            linkToMdFile: `./assets/data/minio-workload/step4.md`
          },
          {
            stepNumber: 5,
            stepTitle: `Monitoring MinIO using Kubera`,
            image_url: `assets/images/workloads/mountain-climber-5.svg`,
            linkToMdFile: `./assets/data/minio-workload/step5.md`
          }
        ]
      },
      operators: {
        title: `MinIO Deployment Options`,
        subtitle: `MayaData supports multiple deployment options for MinIO on Kubernetes`,
        operatorLists: [
          {
            img: null,
            title: `Install with Helm`,
            description: `Helm is a package manager for Kubernetes. It’s used as a standard way to install, update, and remove applications in many k8s environments.`,
            cta: [
              {
                ctaText: `Read More`,
                ctaLink: `https://helm.sh/`
              },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `#`
              }
            ]
          },
          {
            img: null,
            title: `Install with Kubectl`,
            description: `Kubectl is the standard Kubernetes command-line tool for running commands against your k8s clusters. Take any YAML manifest for Kubernetes, and deploy your app with kubectl.`,
            cta: [
              {
                ctaText: `Read More`,
                ctaLink: `https://kubernetes.io/docs/tasks/tools/install-kubectl/`
              },
              {
                ctaText: `Find it on GitHub`,
                ctaLink: `#`
              }
            ]
          }
        ]
      },
      benefits: {
        title: `OpenEBS Benefits for MinIO`,
        subtitle: `If you run MinIO on Kubernetes with OpenEBS, it helps in simplifying the usage in many ways.`,
        benefitList: [
          {
            title: `Monitoring MinIO`,
            description: [
              `View granular stats like data transmitted, data received, and total IOPS of stateful applications like MinIO.`,
              `Gain complete understanding of storage usage and availability`],
            image: {
              imageAlt: `Monitoring MinIO`,
              imageLink: `assets/images/workloads/cassandra/dynamic-cassandra.svg`
            }
          },
          {
            title: `Backup & Restore`,
            description: [
              `OpenEBS allows you to take backup of MinIO as the cold storage target  to any object storage and restore it to the same or any Kubernetes cluster.`
            ],
            image: {
              imageAlt: `Data Backup`,
              imageLink: `assets/images/workloads/cassandra/integrations.svg`
            }
          },
          {
            title: `Scale Up or Scale Out`,
            description: [
              `Adding more storage with OpenEBS is simple. OpenEBS automates scaling of MinIO instances whether you’re on-prem or running in the cloud.`,
              `Adding resources is as simple as registering them with your Kubernetes cluster.`
            ],
            image: {
              imageAlt: `Scale Up or Scale Out`,
              imageLink: `assets/images/workloads/cassandra/monitoring-cassandra.svg`
            }
          },
          {
            title: `Tune Performance to Your Workload`,
            description: [
              `Pick from LocalPV or other feature rich storage engines , OpenEBS supports multiple ways to store, and a bunch of options for tuning to your workload’s needs.`,
              `Deploy in standalone mode for increased write performance. Deploy in distributed mode for HA and increased read performance.`
            ],
            image: {
              imageAlt: `Tune Performance to Your Workload`,
              imageLink: `assets/images/workloads/cassandra/disaster-recovery.svg`
            }
          },
          {
            title: `Scalable & Manageable`,
            description: [
              `OpenEBS and its various storage engines provide easily scalable and manageable storage pools. Scalability of Minio is directly complimented by OpenEBS's feature of infinitely scalable capacity.`
            ],
            image: {
              imageAlt: `Scalable & Manageable`,
              imageLink: `assets/images/workloads/cassandra/cassandra-chaos-engineering.svg`
            }
          }
        ],
        cta: {
          ctaText: "Learn more about OpenEBS & Support Options",
          ctaLink: `/openebs-support`
        }
      },
      resources: null,
      events: {
        title: `MinIO Events & Webinar`,
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
          `Need enterprise support for OpenEBS under MinIO and other workloads?`
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
