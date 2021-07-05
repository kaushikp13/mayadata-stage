import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../../../../services/utils/utils.service"
@Component({
  selector: 'app-arista',
  templateUrl: './arista.component.html',
  styleUrls: ['./arista.component.scss']
})
export class AristaComponent implements OnInit {
  aristaAndOpenEBS = {
    title: `Arista uses OpenEBS with Kubernetes for a variety of use cases`,
    intros: [
      `Arista is an active user of OpenEBS for a variety of use cases, including their CI/CD environment.  `,
      `Arista uses OpenEBS to run several stateful applications on Kubernetes that together comprise various pipelines, including multiple flavors of Gerrit, NPM, Maven, Redis, and Sonarqube.  They also run various internal tools that they have developed which require stateful storage.`,
      `Arista uses a combination of the OpenEBS storage engines cStor and Jiva, with cStor providing additional functionality while Jiva is used in environments were minimalistic footprint is required.`
    ],
    subtitle: `Arista uses OpenEBS to run a number of workloads on Kubernetes, including:`,
    workloadsOnOpenEBS: [
      {
        img_url: `assets/images/adopters/sonarqube-and-openebs.png`,
        img_alt: `SonarQube On OpenEBS`
      },
      {
        img_url: `assets/images/adopters/redis-on-openebs.png`,
        img_alt: `Redis On OpenEBS`
      },
      {
        img_url: `assets/images/adopters/maven-on-openebs.png`,
        img_alt: `Maven On OpenEBS`
      }
    ]
  }



  gainsOfArtisa = [
    {
      title: `Simplifies Developer Responsibilities`,
      description: `Developers now don't have to worry beyond choosing the right StorageClass and size of storage. OpenEBS decouples developers from storage integrity and resilience and other unnecessary details that they shouldn't have to worry about.`
    },
    {
      title: `Withstand cluster disasters`,
      description: `OpenEBS' ability to spread volumes across multiple nodes in a Kubernetes cluster, as well as automatic recovery of degraded replicas without operator involvement, was the highest requirement of Arista for a storage solution, and OpenEBS met this perfectly.`
    },
    {
      title: `Kubernetes Rolling Upgrades`,
      description: `Another important use case is supporting the rolling upgrades of Kubernetes itself.  Rolling upgrades with Kubernetes are a breeze thanks to OpenEBS since the Arista team only needs to maintain quorum - for example 2 out of 3 nodes - and so can blow away a single node during the upgrade process.  These nodes typically would also be backed up using the Velero plug-in to OpenEBS.`
    },
    {
      title: `Separate Application from storage`,
      description: `The application is now entirely decoupled from where the storage is thanks to the iSCSI backbone. Also, with the help of the NDM capabilities of NDM, the Arista team optimizes storage nodes vs. nodes serving applications and then serves storage as needed over iSCSI.`
    },
    {
      title: `Configure and deploy with ease`,
      description: `Additionally, the deployment of OpenEBS is effortless, made all the more so because OpenEBS doesn’t require many nodes to operate, unlike traditional shared everything models such as CEPH.  The amount of nodes required to operate OpenEBS is incomparably lower and more efficient.  Ongoing operations and resilience is improved thanks in part to the use of proven technologies within OpenEBS such as iSCSI and ZFS. `
    }
  ];
  aristaIntro = {
    title: 'Arista Networks Use Cases- OpenEBS',
    descriptions: [
      `Arista Networks is a leader in building high-performance, scalable, and ultra-low latency cloud networks with less power consumption and a small footprint for cloud computing environments and modern data centers. `
    ]
  };

  signUpUrl = null;

  constructor(private utils: UtilsService) {
    this.signUpUrl = `${this.utils.websites().accountUrl}/signup`;
  }

  ngOnInit() {
  }

}
