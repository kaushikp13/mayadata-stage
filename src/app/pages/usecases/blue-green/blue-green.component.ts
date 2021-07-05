import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-green',
  templateUrl: './blue-green.component.html',
  styleUrls: ['./blue-green.component.scss']
})
export class BlueGreenComponent implements OnInit {

  bluegreen = {
    intro: {
      title: `Rollout your stateful application with Blue-Green deployment`,
      description: `With OpenEBS cloning your DBs, you can use Blue-Green patterns even on stateful workloads.`,
      cta: {
        ctaText: `Read more`,
        ctaLink: `https://docs.openebs.io/docs/next/bluegreen.html`
      },
      img: {
        imgSrc: 'assets/images/usecases/blue-green-hero-img.svg',
        imgAlt: `Blue Green`
      }
    },
    issues: {
      title: `Common issues with Blue-Green Deployments for stateful applications`,
      issues: [
        `Stateful applications such as Elastic or MongoDB need easy to use containerized storage allowing seamless upgrades and deployments.`,
        `Blue-Green strategy does not work without Blue and Green copies or clones. Making those copies efficiently and automatically is crucial.`,
        `Legacy storage systems are challenged by the dynamism of containerized environments & struggle to empower DevOps teams.`
      ]
    },
    solutions: {
      title: `OpenEBS solution for Blue-Green deployments`,
      solutions: [
        `OpenEBS provides an instant additional copy (Blue-Green) through cloning and maintains data replication to the new copy. Customers can automatically change the replication direction between Blue-Green copies of the data.`,
        `The CAS architecture means OpenEBS is truly cloud native storage - easy to manage and it scales like other workloads on Kubernetes. This eliminates the need for special skills and the blast radius from legacy scale-out storage.`
      ]
    },
    deployUsingOpenEBS: {
      title: `Blue-Green Strategy using OpenEBS`,
      img: {
        imgSrc: `assets/images/usecases/blue-green-diagram.svg`,
        imgAlt: `Blue Greeen Diagram`
      }
    },
    advantages: {
      title: `MayaData advantages for Blue-Green deployment use cases`,
      advantages: [
        {
          title: `Blue-Green`,
          description: `Blue-Green deployment solution with instant Blue and Green clones and management.`
        },
        {
          title: `Complete automation`,
          description: `If you run Kubernetes, you already know how to run OpenEBS.`
        },
        {
          title: `Blue-Green with OpenEBS`,
          description: `Blue-Green pattern works for OpenEBS upgrades as well- of course`
        },
        {
          title: `Analytics`,
          description: `Monitor with Kubera and Chaos Engineering with Litmus to ensure success.`
        }
      ]
    },
    cta: {
      title: `Need help with integrating OpenEBS with Blue-Green? Fill in the form and we will get back to you soon`,
      cta: {
        ctaLink: `https://calendly.com/mayadata/15min`,
        ctaText: `Request a demo`
      }
    }

  }

  constructor() { }

  ngOnInit() { }

}
