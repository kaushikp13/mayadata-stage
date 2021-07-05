import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('banner', { static: false }) banner;

  notification;
  constructor() { }

  ngOnInit() {
    this.notification = this.notify_events.filter(event => event.notificationStopDate > new Date()).sort(
      (date1, date2) => (date1.notificationStopDate.getTime() - date2.notificationStopDate.getTime()))[0]
  }

  notify_events = [
    {
      notificationContent: 'Webinar: Kubecon Barcelona Update + OpenEBS 0.9 release',
      notificationURL: 'https://go.openebs.io/kubecon2019-webinar',
      externalURL: true,
      notificationStartDate: new Date('2019-05-31'),
      notificationStopDate: new Date('2019-06-12')
    },
    {
      notificationContent: 'We are participating in ContainerDays 2019',
      notificationURL: 'https://www.containerdays.io/speakers/',
      externalURL: true,
      notificationStartDate: new Date('2019-06-13'),
      notificationStopDate: new Date('2019-06-27')
    },
    {
      notificationContent: 'Get OpenEBS Commercial Support (MDAP V1.0)',
      notificationURL: '/mdap',
      externalURL: false,
      notificationStartDate: new Date('2019-06-27'),
      notificationStopDate: new Date('2019-09-29')
    },
    {
      notificationContent: 'MayaData is celebrating Hacktoberfest 2019 with OpenEBS and LitmusChaos',
      notificationURL: '/hacktoberfest',
      externalURL: false,
      notificationStartDate: new Date('2019-09-30'),
      notificationStopDate: new Date('2019-11-01')
    },
    {
      notificationContent: 'REGISTER for FREE Kubernetes and OpenEBS Technical Workshop at Kubecon',
      notificationURL: 'https://go.mayadata.io/openebs-meet-kubecon-sandiego',
      externalURL: true,
      notificationStartDate: new Date('2019-11-01'),
      notificationStopDate: new Date('2019-11-19')
    },
    {
      notificationContent: "We've raised $26 million in investment & partnered with DataCore to improve data agility in K8s. Read more in our blog!",
      notificationURL: 'https://blog.mayadata.io/openebs/mayadata-and-openebs-attract-investment-and-partnership',
      externalURL: true,
      notificationStartDate: new Date('2020-02-04'),
      notificationStopDate: new Date('2020-03-03')
    },
    {
      notificationContent: "MayaData announces the acceptance of LitmusChaos into the CNCF",
      notificationURL: 'https://blog.mayadata.io/litmuschaos-is-now-a-cncf-sandbox-project',
      externalURL: true,
      notificationStartDate: new Date('2020-06-30'),
      notificationStopDate: new Date('2020-07-11')
    },
    {
      notificationContent: "We are at KubeCon Virtual. Meet the creators of OpenEBS, LitmusChaos & Kubera. Join the #6-kubecon-mayadata on CNCF Slack to talk to us",
      notificationURL: 'https://cloud-native.slack.com',
      externalURL: true,
      notificationStartDate: new Date('2020-08-13'),
      notificationStopDate: new Date('2020-08-21')
    },

    {
      notificationContent: 'MayaData is celebrating Hacktoberfest 2020 with OpenEBS and LitmusChaos',
      notificationURL: '/hacktoberfest-2020',
      externalURL: false,
      notificationStartDate: new Date('2020-09-30'),
      notificationStopDate: new Date('2020-11-01')
    },
    {
      notificationContent: 'Apply for the Kubera Tech Preview now. No charge for accepted users for a limited time.',
      notificationURL: 'https://go.mayadata.io/register-for-kubera-chaos-and-propel-technical-preview',
      externalURL: true,
      notificationStartDate: new Date('2020-11-17'),
      notificationStopDate: new Date('2021-02-09')
    },
    {
      notificationContent: "MayaData announces a spin-off of Litmus as an independent company - ChaosNative",
      notificationURL: "https://blog.mayadata.io/mayadata-launching-chaosnative-for-litmuschaos-and-more",
      externalURL: true,
      notificationStartDate: new Date('2021-02-10'),
      notificationStopDate: new Date('2021-03-02')
    },
    {
      notificationContent: "Run data-intensive apps with the fastest open-source storage for Kubernetes. Register for Kubera Propel",
      notificationURL: "https://go.mayadata.io/kubera-propel-trial",
      externalURL: true,
      notificationStartDate: new Date('2021-03-05'),
      notificationStopDate: new Date('2021-03-21')
    },
    {
      notificationContent: `Lightning-fast storage solution for Kubernetes with OpenEBS Mayastor and Intel<sup>&reg;</sup>  Optane<sup>&trade;</sup>. Check out the case study`,
      notificationURL: "/casestudies/intel-and-mayadata-benchmarking-of-openEBS-mayastor",
      externalURL: false,
      notificationStartDate: new Date('2021-03-22'),
      notificationStopDate: new Date('2021-04-21')
    },
    {
      notificationContent: `Join us at KubeCon Europe 2021 & the Data on Kubernetes Day`,
      notificationURL: "https://dok.community/dokc-day-schedule/",
      externalURL: true,
      notificationStartDate: new Date('2021-04-22'),
      notificationStopDate: new Date('2021-05-04')
    },
    {
      notificationContent: `Join the MayaData Office Hours at KubeCon`,
      notificationURL: "https://kubecon-cloudnativecon-europe.com/login/",
      externalURL: true,
      notificationStartDate: new Date('2021-05-04'),
      notificationStopDate: new Date('2021-05-08')
    }
  ];
}
