import { WEBINAR } from "../constants/content-types"
import { GTM } from "../constants/constants"
import { webinarActionText, isWebinarOver } from "../utilities/isWebinarOver";
import { getFormattedDate } from "../utilities/getFormattedDate";


// In javascript , month start from 0;
// 0 = Jan, 1 = Feb, 2 = March

// export const webinarsInResources = [
//   {
//     title: `Webinar: Operating Cassandra on Kubernetes with the help of OpenEBS & LitmusChaos`,
//     subtitle: '',
//     description: `With Kubernetes popularity skyrocketing and the massive adoption of Apache Cassandra as a NoSQL database well-suited to the high availability and scalability needs of cloud-based applications, it should be no surprise that more developers are running Cassandra on Kubernetes. However, many devs are searching for the right solutions to use to ease the operations of Cassandra on Kubernetes.`,
//     type: WEBINAR,
//     url: 'https://go.mayadata.io/operating-cassandra-on-kubernetes-with-the-help-of-openebs-litmuschaos-webinar',
//     actionText: webinarActionText(new Date(2020, 8, 24, 23, 30, 0)),
//     iswebinarOver: isWebinarOver(new Date(2020, 8, 24, 23, 30, 0)),
//     date: "September 24, 2020",
//     isOtherCompanyWebinar: false,
//     notesForWebinar: '',
//     image_url: 'assets/images/resources/webinars/webinar-1.png',
//     image_alt: 'Operating Cassandra on Kubernetes with the help of OpenEBS & LitmusChaos',
//     externalLink: true,
//     className: GTM.TRIGGERS.WEBINAR,
//     name: 'Webinar'
//   },
//   {
//     title: `Webinar: Data Protection for Kubernetes`,
//     subtitle: '',
//     description: `Kubernetes and the use of Container Attached Storage such as OpenEBS enables per workload management of data.  This approach has quickly become a standard way to preserve and protect the benefits of Kubernetes for data.  Small, loosely coupled teams manage small, loosely coupled workloads.  There can be 150 or more such workloads per a cluster, and each of these workloads and teams may have different back-up and disaster recovery requirements.`,
//     type: WEBINAR,
//     url: 'https://go.mayadata.io/data-protection-for-kubernetes-webinar',
//     actionText: webinarActionText(new Date(2020, 7, 6, 23, 30, 0)),
//     iswebinarOver: isWebinarOver(new Date(2020, 7, 6, 23, 30, 0)),
//     date: "August 6, 2020",
//     isOtherCompanyWebinar: false,
//     notesForWebinar: '',
//     image_url: 'assets/images/resources/webinars/webinar-2.png',
//     image_alt: 'Data Protection for Kubernetes',
//     externalLink: true,
//     className: GTM.TRIGGERS.WEBINAR,
//     name: 'Webinar'
//   },
//   {
//     title: `CNCF Member Webinar: Kubernetes and storage. Kubernetes for storage. An overview.`,
//     subtitle: '',
//     description: `Originally designed for stateless workloads only, over the last two to three years, the growth of stateful workloads on Kubernetes has been rapid. Today it is common to see monitoring, logging, e-commerce, CI/CD, ML, and other workloads running on Kubernetes.`,
//     type: WEBINAR,
//     url: 'https://www.cncf.io/webinars/kubernetes-for-storage-an-overview/',
//     actionText: webinarActionText(new Date(2020, 6, 16, 23, 30, 0)),
//     iswebinarOver: isWebinarOver(new Date(2020, 6, 16, 23, 30, 0)),
//     date: new Date(2020, 6, 16, 23, 30, 0),
//     isOtherCompanyWebinar: true,
//     notesForWebinar: 'This is an official CNCF webinar.',
//     image_url: 'assets/images/resources/webinars/webinar-3.png',
//     image_alt: 'Kubernetes and storage. Kubernetes for storage. An overview.',
//     externalLink: true,
//     className: GTM.TRIGGERS.WEBINAR,
//     name: 'Webinar'
//   },
//   {
//     title: `Kubera - Kubernetes native management of Kubernetes native data `,
//     subtitle: '',
//     description: `Kubera is a SaaS platform - also available on-premise - that simplifies the use of Kubernetes as a data plane and that is free for individual usage.`,
//     type: WEBINAR,
//     url: 'https://go.mayadata.io/kubera_launch_webinar',
//     actionText: webinarActionText(new Date(2020, 5, 24, 23, 30, 0)),
//     date: new Date(2020, 5, 24, 23, 30, 0),
//     image_url: 'assets/images/resources/webinars/webinar-1.png',
//     image_alt: 'Kubernetes native management of Kubernetes native data',
//     externalLink: true,
//     className: GTM.TRIGGERS.WEBINAR,
//     name: 'Webinar'
//   },
//   {
//     title: `OpenEBS - Still Free and now FASTEST Kubernetes Storage`,
//     subtitle: '',
//     description: `Shared storage systems have fallen out of favor in
//       part because their performance is difficult to characterize, unstable,
//       and generally much slower than underlying NVMe systems.
//       The tight coupling of workloads together via shared storage and
//       the resulting blast radius is also worthy of consideration.`,
//     type: WEBINAR,
//     url: 'https://go.mayadata.io/openebs-performance-may-webinar',
//     actionText: webinarActionText(new Date(2020, 5, 28)),
//     date: new Date(2020, 5, 28),
//     image_url: 'assets/images/resources/webinar.png',
//     image_alt: 'OpenEBS - Still Free and now FASTEST Kubernetes Storage',
//     externalLink: true,
//     className: GTM.TRIGGERS.WEBINAR,
//     name: 'Webinar'
//   }
// ];

// Latest past event content

// {
//   title: `Webinar: Visit the creators of OpenEBS & Litmus Chaos virtually at KubeCon NA 2020`,
//   subtitle: '',
//   description: `We are proud to be the gold sponsor of KubeCon NA 2020 scheduled to be held on 17th - 20th November, 2020. Stay tuned for more updates.`,
//   type: WEBINAR,
//   url: 'https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/',
//   actionText: webinarActionText(new Date(2020, 10, 17, 0, 0, 0)),
//   iswebinarOver: isWebinarOver(new Date(2020, 10, 17, 0, 0, 0)),
//   date: "October 17, 2020",
//   isOtherCompanyWebinar: false,
//   notesForWebinar: '',
//   image_url: 'assets/images/workloads/cassandra/event.png',
//   image_alt: 'A guy participating in an event',
//   externalLink: true,
//   className: GTM.TRIGGERS.WEBINAR,
//   name: 'Webinar'
// },

export const webinars = [

  {
    title: `Webinar: Operating Cassandra on Kubernetes with the help of OpenEBS & LitmusChaos`,
    subtitle: '',
    description: `With Kubernetes popularity skyrocketing and the massive adoption of Apache Cassandra as a NoSQL database well-suited to the high availability and scalability needs of cloud-based applications, it should be no surprise that more developers are running Cassandra on Kubernetes. However, many devs are searching for the right solutions to use to ease the operations of Cassandra on Kubernetes.`,
    type: WEBINAR,
    url: 'https://go.mayadata.io/operating-cassandra-on-kubernetes-with-the-help-of-openebs-litmuschaos-webinar',
    actionText: webinarActionText(new Date(2020, 8, 24, 23, 30, 0)),
    iswebinarOver: isWebinarOver(new Date(2020, 8, 24, 23, 30, 0)),
    date: "September 24, 2020",
    isOtherCompanyWebinar: false,
    notesForWebinar: '',
    image_url: 'assets/images/resources/webinars/webinar-1.png',
    image_alt: 'Operating Cassandra on Kubernetes with the help of OpenEBS & LitmusChaos',
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    name: 'Webinar'
  },
  {
    title: `Webinar: Data Protection for Kubernetes`,
    subtitle: '',
    description: `Kubernetes and the use of Container Attached Storage such as OpenEBS enables per workload management of data.  This approach has quickly become a standard way to preserve and protect the benefits of Kubernetes for data.  Small, loosely coupled teams manage small, loosely coupled workloads.  There can be 150 or more such workloads per a cluster, and each of these workloads and teams may have different back-up and disaster recovery requirements.`,
    type: WEBINAR,
    url: 'https://go.mayadata.io/data-protection-for-kubernetes-webinar',
    actionText: webinarActionText(new Date(2020, 7, 6, 23, 30, 0)),
    iswebinarOver: isWebinarOver(new Date(2020, 7, 6, 23, 30, 0)),
    date: "August 6, 2020",
    isOtherCompanyWebinar: false,
    notesForWebinar: '',
    image_url: 'assets/images/resources/webinars/webinar-2.png',
    image_alt: 'Data Protection for Kubernetes',
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    name: 'Webinar'
  },
  {
    title: `CNCF Member Webinar: Kubernetes and storage. Kubernetes for storage. An overview.`,
    subtitle: '',
    description: `Originally designed for stateless workloads only, over the last two to three years, the growth of stateful workloads on Kubernetes has been rapid. Today it is common to see monitoring, logging, e-commerce, CI/CD, ML, and other workloads running on Kubernetes.`,
    type: WEBINAR,
    url: 'https://www.cncf.io/webinars/kubernetes-for-storage-an-overview/',
    actionText: webinarActionText(new Date(2020, 6, 16, 23, 30, 0)),
    iswebinarOver: isWebinarOver(new Date(2020, 6, 16, 23, 30, 0)),
    date: "July 16, 2020",
    isOtherCompanyWebinar: true,
    notesForWebinar: 'This is an official CNCF webinar.',
    image_url: 'assets/images/resources/webinars/webinar-3.png',
    image_alt: 'Kubernetes and storage. Kubernetes for storage. An overview.',
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    name: 'Webinar'
  },
  {
    title: `Kubera - Kubernetes native management of Kubernetes native data `,
    subtitle: '',
    description: `Originally designed for stateless workloads only, over the last two to three years, the growth of stateful workloads on Kubernetes has been rapid. Today it is common to see monitoring, logging, e-commerce, CI/CD, ML, and other workloads running on Kubernetes.`,
    type: WEBINAR,
    url: 'https://go.mayadata.io/kubera_launch_webinar',
    actionText: webinarActionText(new Date(2020, 5, 24, 23, 30, 0)),
    iswebinarOver: isWebinarOver(new Date(2020, 5, 24, 23, 30, 0)),
    date: "June 24, 2020",
    isOtherCompanyWebinar: false,
    notesForWebinar: '',
    image_url: 'assets/images/resources/webinars/webinar-1.png',
    image_alt: 'Kubernetes native management of Kubernetes native data',
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    name: 'Webinar'
  },

  {
    title: 'OpenEBS - Still Free and now FASTEST Kubernetes Storage',
    subtitle: '',
    description: `Shared storage systems have fallen out of favor in
    part because their performance is difficult to characterize, unstable,
    and generally much slower than underlying NVMe systems.
    The tight coupling of workloads together via shared storage and
    the resulting blast radius is also worthy of consideration.`,
    url: 'https://go.mayadata.io/openebs-performance-may-webinar',
    image_url: 'assets/images/resources/webinars/webinar-2.png',
    image_alt: 'OpenEBS - Still Free and now FASTEST Kubernetes Storage',
    actionText: webinarActionText(new Date(2020, 4, 28)),
    date: getFormattedDate("2020, 05, 28"),
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Save 60% of Kubernetes storage costs on AWS & others with OpenEBS',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/save-60-of-kubernetes-storage-costs-with-openebs',
    image_url: 'assets/images/resources/webinars/webinar-3.png',
    image_alt: 'Save 60% of Kubernetes storage costs on AWS & others with OpenEBS',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Using LitmusChaos Engineering and AI for auto incident detection',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar-using-litmus-chaos-engineering-ai-for-auto-incident-detection',
    image_url: 'assets/images/resources/webinars/webinar-1.png',
    image_alt: 'Using LitmusChaos Engineering and AI for auto incident detection',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Building a Multi-cloud Kubernetes Storage Environment for GitLab',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/multi-cloud-kubernetes-storage-environment-for-gitlab',
    image_url: 'assets/images/resources/webinars/webinar-2.png',
    image_alt: 'Building a Multi-cloud Kubernetes Storage Environment for GitLab',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Use GitLab with Chaos Engineering to Harden your Applications',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar-openebs1.3-release',
    image_url: 'assets/images/resources/webinars/webinar-3.png',
    image_alt: 'gitlab with chaos engineering to harden your applications',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Better Together : MayaData D2iQ Webinar',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar-launching-d2iq-konvoy-openebs',
    image_url: 'assets/images/resources/webinars/webinar-1.png',
    image_alt: 'openebs d2iq webinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'OpenEBS 1.1 Release Webinar',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar/openebs-1.1release',
    image_url: 'assets/images/resources/webinars/webinar-2.png',
    image_alt: 'openebs webinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'OpenEBS 1.0 Release Webinar',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar/openebs1release',
    image_url: 'assets/images/resources/webinars/webinar-3.png',
    image_alt: 'openebs webinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Webinar with OpenEBS and Rancher',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar/openebs-rancher',
    image_url: 'assets/images/resources/webinars/webinar-1.png',
    image_alt: 'openebs webinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'Kubecon Barcelona Update',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/kubecon2019-webinar',
    image_url: 'assets/images/resources/webinars/webinar-2.png',
    image_alt: 'kubecon webinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'NuoDB  Webinar',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar/nuodb',
    image_url: 'assets/images/resources/webinars/webinar-3.png',
    image_alt: 'NuodbWebinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  },
  {
    title: 'OpenEBS 0.8.1 release',
    subtitle: '',
    description: '',
    url: 'https://go.mayadata.io/webinar/openebs0.8.1release',
    image_url: 'assets/images/resources/webinars/webinar-1.png',
    image_alt: 'Webinar',
    actionText: 'Watch Now',
    date: null,
    externalLink: true,
    className: GTM.TRIGGERS.WEBINAR,
    type: WEBINAR,
    name: 'Webinar'
  }
];
