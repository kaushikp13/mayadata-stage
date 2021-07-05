import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-cd',
  templateUrl: './ci-cd.component.html',
  styleUrls: ['../blue-green/blue-green.component.scss']
})
export class CiCdComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  cicd = {
    intro: {
      title: `Accelerate and ensure the fidelity of your CI/CD pipeline`,
      description: `Restore the state of your workloads via the OpenEBS API. Ensure the fidelity of your CI / CD pipeline by managing temporary and permanent copies seamlessly.`,
      cta: {
        ctaText: `Read more`,
        ctaLink: `https://docs.openebs.io/docs/next/cicd.html`
      },
      img: {
        imgSrc: 'assets/images/usecases/ci-cd-hero-img.svg',
        imgAlt: `CI CD`
      }
    },
    issues: {
      title: `Developers need quick access to their stateful applications`,
      issues: [
        `DevOps teams drive towards faster feedback loops. Applying proven stateless patterns to high-value stateful workloads can be challenging.`,
        `In particular, the provisioning, saving of state, and restoring of state of a stateful application in a CI/CD pipeline is especially challenging in cloud native architectures.`,
        `Teams wrestle with ways to allow DevOps teams to save the state of the stateful application in the pipeline stages and restore the state of the application when a failure occurs in the pipelines.`
      ]
    },
    solutions: {
      title: `OpenEBS solution for Blue-Green deployments`,
      solutions: [
        `Helps make CI/CD for stateful workloads as easy as stateless workloads.`,
        `OpenEBS provides easy to use tools / API to achieve, save and restore the state of an application.`,
        `LitmusChaos helps in validating and hardening the stateful application through the pipelines.`,
        `Kubera helps in comprehensive monitoring and management of data snapshots and provides developer workflow to restore the state of the application.`
      ]
    },
    deployUsingOpenEBS: {
      title: `CI/CD deployment using OpenEBS`,
      img: {
        imgSrc: `assets/images/usecases/cicd-diagram.svg`,
        imgAlt: `CI CD Diagram`
      }
    },
    advantages: {
      title: `MayaData Advantages for CI/CD use cases`,
      advantages: [
        {
          title: `Management`,
          description: `Per workload provisioning and management of stateful applications and copies.`
        },
        {
          title: `API`,
          description: `API for saving and restoring the application state in CI pipelines.`
        },
        {
          title: `Extension of LitmusChaos`,
          description: `Extension of LitmusChaos into CI pipelines to help validate and harden the appilcations faster.`
        },
        {
          title: `Monitoring`,
          description: `Stateful CI/CD focused monitoring and cross-cloud control using Kubera.`
        }
      ]
    },
    cta: {
      title: `Need help with integrating OpenEBS with CI/CD? Fill in the form and we will get back to you soon.`,
    }

  }

}
