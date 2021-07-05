import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hybrid-cloud',
  templateUrl: './hybrid-cloud.component.html',
  styleUrls: ['../blue-green/blue-green.component.scss']
})
export class HybridCloudComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  multicloud = {
    intro: {
      title: `Natively Multi-Cloud. Run on Kubernetes with no modifications. Anywhere!`,
      description: `OpenEBS builds upon the any-cloud capabilities of Kubernetes to remove lock-in as an inhibitor to developer agility.`,
      cta: null,
      img: {
        imgSrc: 'assets/images/usecases/multi-cloud-hero-img.svg',
        imgAlt: `Multi Cloud`
      }
    },
    issues: {
      title: `Issues with Multi-Cloud`,
      issues: [
        `The use of multiple clouds is increasing thanks, in part, to Kubernetes. However, stateful workloads can lead to lock-in due to the use of legacy storage on-premises and cloud-specific storage in the cloud. OpenEBS abstracts all underlying storage in a way that blends seamlessly into your workloads.`
      ]
    },
    solutions: {
      title: `Using OpenEBS for Multi-Cloud scenarios`,
      solutions: [
        `The cMotion feature of OpenEBS provides freedom to move stateful applications across the clusters in Multi-Cloud. This solves the biggest problem of data gravity of cloud provider or cloud lock-in.`,
        `As the size of Kubernetes clusters grow, the Node Disk Manager (NDM) of OpenEBS becomes crucially important. NDM provides a Kubernetes native way to provision, monitor, and inventory underlying storage such as disks and cloud volumes.`,
        `Kubera gives a single view across clouds and clusters of your stateful workloads to help close the loop.`
      ]
    },
    deployUsingOpenEBS: {
      title: `Multi-Cloud deployment using OpenEBS`,
      img: {
        imgSrc: `assets/images/usecases/multi-cloud-diagram.svg`,
        imgAlt: `Hyper Scale Diagram`
      }
    },
    advantages: {
      title: `MayaData advantages for Hyperscale use cases`,
      advantages: [
        {
          title: `cMotion`,
          description: `Seamleassly move your stateful applications across Kubernetes clusters using cMotion`
        },
        {
          title: `No cloud lock-in`,
          description: `Avoid cloud lock-in for your stateful applications`
        },
        {
          title: `Smart alerts`,
          description: `Smart alerts delivered to your slack channel using a dedicated slack application (MuleBot)`
        },
        {
          title: `Cross-cloud control`,
          description: `Cross-cloud control and visibility of stateful applications data using Kubera`
        }
      ]
    },
    cta: {
      title: `Need help with integrating OpenEBS with Multi-Cloud? Fill in the form and we will get back to you soon.`,
    }
  }


}
