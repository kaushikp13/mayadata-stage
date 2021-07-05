import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-kubera-feature',
  templateUrl: './pricing-kubera-feature.component.html',
  styleUrls: ['./pricing-kubera-feature.component.scss']
})
export class PricingKuberaFeatureComponent implements OnInit {
  titles: any = `<span>Why users choose</span> OpenEBS support`;

  kuberaPricingFeatures = [
    {
      img: {
        imgSrc: "assets/images/pricing/kubernetes.png",
        imgAlt: "kubernetes"
      },
      title: "Stateful K8s that Scales",
      description: "OpenEBS is the fastest and most deployed open source container attached storage solution for Kubernetes. Enterprise support adds everything you need to run, monitor and fine tune wicked fast data workloads that scale."
    },
    {
      img: {
        imgSrc: "assets/images/pricing/gear.png",
        imgAlt: "Gear"
      },
      title: "Confidence and reliability",
      description: "OpenEBS is used in production by thousands of users thanks to the vibrant community, many of whom have contributed useful patterns and improvements including users of Cassandra, CockroachDB, Yugabyte, PostgreSQL TiDB, Elasticsearch, Kafka and many other common workloads."
    },
    {
      img: {
        imgSrc: "assets/images/pricing/timer.png",
        imgAlt: "Timer"
      },
      title: "Time Saved",
      description: "Prevent issues before they become incidents with the expertise of MayaData’s team of data on Kubernetes experts.  Options include 24x7 augmented monitoring of your environment, ongoing operational audits and assistance, and more.  We are here to help."
    },
    {
      img: {
        imgSrc: "assets/images/pricing/enterprise-ready.png",
        imgAlt: "Enterprise Ready"
      },
      title: "Enterprise Ready",
      description: "RBAC, Active Directory, team management, policy, compliance, and more! Data on Kubernetes needs all of these enterprise essentials. A subscription to Kubera delivers in a tidy package."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
