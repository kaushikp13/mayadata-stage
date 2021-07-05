import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyperscale',
  templateUrl: './hyperscale.component.html',
  styleUrls: ['../blue-green/blue-green.component.scss']
})
export class HyperscaleComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  hyperscale = {
    intro: {
      title: `Scale compute and storage independently as increased demand is added`,
      description: `OpenEBS grows as you want and where you want by your definitions, specified in your storage policies to give you the flexibility of Hyperscale infrastructure.`,
      cta: null,
      img: {
        imgSrc: 'assets/images/usecases/hyper-scale-hero-img.svg',
        imgAlt: `Cross AZ`
      }
    },
    issues: {
      title: `Issues with legacy and mixed hardware`,
      issues: [
        `Mixed infrastructure where storage and compute are not equally available on every node need to be efficiently utilized.`,
        `In some cases, storage has to be still controlled by storage admins.`,
        `Stateless workload heavy environment, where stateless and stateful workloads have to flood around the same nodes requires dedicated storage nodes.`
      ]
    },
    solutions: {
      title: `Using OpenEBS for Hyperscale scenarios`,
      solutions: [
        `If you have certain nodes that have disks attached aka Storage Nodes, OpenEBS Volume Replica Pods can be scheduled on these Storage Nodes only.`,
        `Taints & tolerations feature allow use of storage on specific Kubernetes nodes.`,
        `Kubernetes Node Affinity can also used with OpenEBS to attached storage to specific Kubernetes nodes.`
      ]
    },
    deployUsingOpenEBS: {
      title: `Hyperscale deployment using OpenEBS`,
      img: {
        imgSrc: `assets/images/usecases/hyper-scale-diagram.svg`,
        imgAlt: `Hyper Scale Diagram`
      }
    },
    advantages: {
      title: `MayaData advantages for Hyperscale use cases`,
      advantages: [
        {
          title: `Infrastrukture Management`,
          description: `With Node Disk Manager (NDM), storage infrastructure management becomes easy`
        },
        {
          title: `Easy Storage Policies`,
          description: `Easy and scalable storage policies for tagging some nodes in the K8S cluster only for storage`
        },
        {
          title: `Easy adding storage`,
          description: `Adding more storage capacity and performance is seamless and online`
        },
        {
          title: `Management`,
          description: `Monitoring & management of large scale storage infrastructure is made easier by Kubera`
        }
      ]
    },
    cta: {
      title: `Need help with integrating OpenEBS with HyperScale? Fill in the form and we will get back to you soon.`,
    }
  }

}
