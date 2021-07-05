import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['../blue-green/blue-green.component.scss']
})
export class AwsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crossaz = {
    intro: {
      title: `Deploy stateful applications on AWS across availability zones with AWS instance stores or local disks`,
      description: `AWS instance store volumes have many advantages but they cannot be used when high availability is needed in the event of an EC2 instance loss. With OpenEBS replication across zones, you can now run your stateful application across zones on AWS with instance stores.`,
      cta: {
        ctaText: `Read more`,
        ctaLink: `https://docs.openebs.io/docs/next/tasks_az.html`
      },
      img: {
        imgSrc: 'assets/images/usecases/az-hero-img.svg',
        imgAlt: `Cross AZ`
      }
    },
    issues: {
      title: `Developers need quick access to their stateful applications`,
      issues: [
        `Issues with AWS EBS disks across AZ or Instance stores on AWS`,
        `Attaching and detaching is not instantaneous. Takes time and application disconnects can happen.`,
        `Instance stores are fast but the data is completely lost when the node is lost. Applications are expected to handle the high availability of data through replication.`,
        `Even if the application handles replication, rebuilding to the new disks is a longer tasks and will have an impact on application performance.`
      ]
    },
    solutions: {
      title: `Using OpenEBS for AWS Cross AZ scenarios`,
      solutions: [
        `With OpenEBS, taints/tolerations on the nodes/applications can be configured in such a way that the replicas of OpenEBS volume are spread across the zones.`,
        `When instance stores are used to host the data for OpenEBS replicas, the availability of data increases compared to AWS EBS volumes, as a replica of the data is made available to the application pod across zones always.`
      ]
    },
    deployUsingOpenEBS: {
      title: `Cross AZ deployment using OpenEBS`,
      img: {
        imgSrc: `assets/images/usecases/az-diagram.svg`,
        imgAlt: `Cross AZ Diagram`
      }
    },
    advantages: {
      title: `MayaData advantages with AWS cross AZ use cases`,
      advantages: [
        {
          title: `Management`,
          description: `AWS instance store discovery and mangement is made easy with Node Disk Manager.`
        },
        {
          title: `Kubernetes`,
          description: `Seamless integration with Kubernetes for taking snapshots and restoring the data from snapshots.`
        },
        {
          title: `Extension of LitmusChaos`,
          description: `Adding more capacity or performance to the stateful application is seamless and online.`
        },
        {
          title: `Upgrade`,
          description: `Get granular visibility into your stateful applications at one single place.`
        }
      ]
    },
    cta: {
      title: `Need help with integrating OpenEBS with Cross AZ? Fill in the form and we will get back to you soon.`,
    }
  }

}
