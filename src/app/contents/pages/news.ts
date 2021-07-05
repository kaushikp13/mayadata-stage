// This is news arrays of object, If new news need to listed, add it in the start of array.
export const news = [
  {
    newsImage: `assets/images/mayadata-landing/mayadata-logo-dark.svg`,
    newsTitle: `ChaosNative launches to accelerate Litmus adoption in Enterprises`,
    newsContent: `MayaData, a top 5 contributor of CNCF projects, announces a spin-off of Litmus as an independent company ChaosNative.`,
    newsDate: new Date(`Feb 10, 2021`),
    newsLink: `/news/chaos-native`
  },
  {
    newsImage: `assets/images/mayadata-landing/mayadata-logo-dark.svg`,
    newsTitle: `Platform9 and MayaData announce partnership to optimize high-performance workload delivery with managed Kubernetes `,
    newsContent: `MayaData and Platform9 today announced a collaboration for the deployment and operation of performance-sensitive stateful workloads on Kubernetes.`,
    newsDate: new Date(`December 3, 2020`),
    newsLink: `/news/mayadata-platform9-announces-partnership`
  },
  {
    newsImage: `assets/images/mayadata-landing/mayadata-logo-dark.svg`,
    newsTitle: `MayaData launches Kubera Propel and Kubera Chaos`,
    newsContent: `MayaData, a leading developer of open-source software for using Kubernetes as a data layer, announces the commercial availability of Kubera Propel and Kubera Chaos. Kubera Propel is based on the most popular open-source Container Attached Storage project, OpenEBS, which MayaData started and continues to lead.`,
    newsDate: new Date(`November 17, 2020`),
    newsLink: `/news/mayadata-launches-kubera-propel-and-kubera-chaos`
  },
  {
    newsImage: `assets/images/prnewswire.svg`,
    newsTitle: `MayaData announces record growth in community adoption and revenues`,
    newsContent: `MayaData today announced mid-year 2020 results, including 419% growth in adoption of the CNCF project OpenEBS and the inclusion of the LitmusChaos project into the CNCF. Additionally, MayaData products including Kubera - with capabilities that include per workload back-ups - have delivered over 400% growth in sales during the first half of 2020 compared to the first half of 2019.`,
    newsDate: new Date(`August 17, 2020`),
    newsLink: `/news/mayadata-announces-record-growth-in-community-adoption-and-revenues`
  },
  {
    newsImage: `assets/images/prnewswire.svg`,
    newsTitle: `MayaData Announces the Acceptance of LitmusChaos Into CNCF Sandbox`,
    newsContent: `MayaData, the creator of the most widely-used open source Kubernetes-native storage OpenEBS, has received acceptance of another open-source project LitmusChaos into CNCF Sandbox. With the acceptance of LitmusChaos into the CNCF, MayaData adds to the industry's first complete, open-source, solution for using Kubernetes as a data layer, enabling Kubernetes SREs and platform teams to develop, deploy, and operate stateful workloads on Kubernetes faster and more reliably. The complete solution, Kubera, was announced last week and is free forever for individual usage as SaaS and also on-premise.`,
    newsDate: new Date(`Jun 30, 2020`),
    newsLink: `https://www.prnewswire.com/news-releases/mayadata-announces-the-acceptance-of-litmuschaos-into-cncf-sandbox-301086101.html`
  },
  {
    newsImage: `assets/images/prnewswire.svg`,
    newsTitle: `MayaData Launches Kubera for Cloud-native Data`,
    newsContent: `MayaData, the originator of the popular cloud-native projects OpenEBS and Litmus Chaos, today announced Kubera, a new solution for the efficient operations management of Kubernetes as a data layer including logging, alerting, visualization, reporting, backups, maintenance, compliance checks, troubleshooting, and lifecycle automation.`,
    newsDate: new Date(`Jun 16, 2020`),
    newsLink: `https://www.prnewswire.com/news-releases/mayadata-launches-kubera-for-cloud-native-data-301077533.html`
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "MayaData to Accelerate OpenEBS and Container Attached Storage Market with $26 Million Investment",
    newsContent: `Funding and proven storage IP to enhance OpenEBS with more capabilities for customers and users such as Bloomberg, Orange, and Comcast.`,
    newsDate: new Date('Feb 04, 2020'),
    newsLink: 'https://www.prnewswire.com/news-releases/mayadata-to-accelerate-openebs-and-container-attached-storage-market-with-26-million-investment-300997907.html'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "MayaData Boosts OpenEBS Kubernetes Data Performance with the Contribution of Mayastor, Announces v 1.4 & More at KubeCon",
    newsContent: `OpenEBS, the leading Container Attached Storage (CAS) solution for Kubernetes, announced today the inclusion of Mayastor from MayaData, increasing the performance while using Kubernetes as a data plane with OpenEBS by 4-5x or more depending on workload, with tested results of more than 10 million IOPS.`,
    newsDate: new Date('Nov 12, 2019'),
    newsLink: 'https://www.prnewswire.com/news-releases/mayadata-boosts-openebs-kubernetes-data-performance-with-the-contribution-of-mayastor-announces-v-1-4--more-at-kubecon-300956552.html'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "OpenEBS is 1.0 and MayaOnline Available on Premises",
    newsContent: `MayaData, the company behind the open source project OpenEBS, announced today that OpenEBS 1.0 has been released. In addition MayaOnline, a data management application used by many OpenEBS users is now available both for download and as a SaaS solution at <a href="https://mayadata.io" target="_blank">MayaData.io</a>.`,
    newsDate: new Date('June 24, 2019'),
    newsLink: 'https://www.prnewswire.com/news-releases/openebs-is-1-0-and-mayaonline-available-on-premises-300873661.html'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "OpenEBS Accepted Into CNCF and OpenEBS 0.9 Released",
    newsContent: `MayaData, the company behind the open source project OpenEBS, announced today that OpenEBS has been accepted into the Cloud Native Computing Foundation as a Cloud Native Sandbox Project. OpenEBS is the leading open source Container Attached Storage software and has become a frequent part of many Kubernetes deployments since its first release in early 2017.`,
    newsDate: new Date('May 20, 2019'),
    newsLink: 'https://www.prnewswire.com/news-releases/openebs-accepted-into-cncf-and-openebs-0-9-released-300853066.html'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "MayaData Releases v 1.0 of MDAP for Data Agility",
    newsContent: `MayaData, the main sponsor and contributor to OpenEBS, an open source Container Attached Storage (CAS) solution for Kubernetes, announced the general availability of its commercial distribution called MDAP 1.0 - MayaData Agility Platform.`,
    newsDate: new Date('December 7, 2018'),
    newsLink: 'https://www.prnewswire.com/news-releases/mayadata-releases-v-1-0-of-mdap-for-data-agility-811155072.html'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "MayaData, the Sponsor of OpenEBS, Announces Executive Team and Advisor Additions",
    newsContent: `MayaData announced today the addition of Philippe Theriault as Chief Revenue Officer. Philippe
      joins from Red Hat where he was in sales and business development leadership for cloud and DevOps
      focused solutions including OpenStack, OpenShift, Ansible, and related offerings.`,
    newsDate: new Date('October 23, 2018'),
    newsLink: 'https://www.prnewswire.com/news-releases/mayadata-the-sponsor-of-openebs-announces-executive-team-and-advisor-additions-824275033.html'
  },
  {
    newsImage: "assets/images/theregister.png",
    newsTitle: "IBM Cloud Private user wanting containerized storage? It's all yours",
    newsContent: `MayaData has linked arms with IBM to make OpenEBS storage available to IBM Cloud Private users,
      giving Big Blue an answer for those that want containerised storage.`,
    newsDate: new Date('September 4, 2018'),
    newsLink: 'https://www.theregister.co.uk/2018/09/04/ibm_blesses_containerised_storage_with_cloud_private_nod/'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "MayaData Announces the Availability of Data Agility Platform and IBM Partnership",
    newsContent: `MayaData, the creator of the leading open source container attached storage project OpenEBS and the leading Chaos engineering project for stateful workloads, Litmus; today announced the commercial availability of the MayaData Data Agility Platform or MDAP.`,
    newsDate: new Date('August 29, 2018'),
    newsLink: 'https://www.prnewswire.com/news-releases/mayadata-announces-the-availability-of-data-agility-platform-and-ibm-partnership-872863777.html'
  },
  {
    newsImage: "assets/images/storageunpacked.jpg",
    newsTitle: "Persistent Storage and Kubernetes with Evan Powell",
    newsContent: `Chris and Martin talk to Evan Powell, CEO of OpenEBS and formerly the founding CEO of Nexenta. The
      conversation covers the use of persistent storage with container orchestration tool, Kubernetes.
      Despite what the industry might think, persistent storage that can be mapped to a container (or in
      this case pod) is still an important problem to solve.`,
    newsDate: new Date('June 15, 2018'),
    newsLink: 'http://storageunpacked.com/2018/06/53-persistent-storage-and-kubernetes-with-evan-powell/'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "MayaData Releases Litmus - Open Source Chaos Engineering for Kubernetes & Free Tier of MayaOnline",
    newsContent: `At KubeCon, the leading conference discussing cloud native and microservice technologies,
      MayaData, the sponsor of the OpenEBS project and MayaOnline, released a new open source project called Litmus.`,
    newsDate: new Date('May 02, 2018'),
    newsLink: 'https://www.prnewswire.com/news-releases/mayadata-releases-litmus---open-source-chaos-engineering-for-kubernetes--free-tier-of-mayaonline-681458381.html'
  },
  {
    newsImage: "assets/images/newstacklogo.svg",
    newsTitle: "Container Storage Environments in OpenEBS for Kubernetes and Microservices Deployments",
    newsContent: `Tracing, logging, monitoring are all getting re-invented with the advent of container-native
      environments, said Evan Powell on this episode of The New Stack Makers. The force of re-invention
      is also running through the storage and management layers with new thinking about the concept of
      container storage.`,
    newsDate: new Date('April 8, 2018'),
    newsLink: 'https://thenewstack.io/container-storage-environments-in-open-ebs-for-kubernetes-and-microservices-deployments/'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "OpenEBS Certified With Red Hat OpenShift, StackPointCloud, and IBM Cloud",
    newsContent: `Private Adoption of OpenEBS Continues to Accelerate. The momentum behind OpenEBS - a novel open-source containerized storage project sponsored by MayaData - continues to accelerate.`,
    newsDate: new Date('Feb 05, 2018'),
    newsLink: 'https://www.prnewswire.com/news-releases/openebs-certified-with-red-hat-openshift-stackpointcloud-and-ibm-cloud-672729373.html'
  },
  {
    newsImage: "assets/images/prnewswire.svg",
    newsTitle: "OpenEBS Sponsor CloudByte now MayaData and Launches MayaOnline at KubeCon",
    newsContent: `CloudByte / OpenEBS announced that it had renamed itself MayaData in recognition of the launch of MayaOnline. MayaOnline is a software as a service solution that promises to address cloud lock-in while
      providing Kubernetes monitoring and control, focusing on the data layer.`,
    newsDate: new Date('Dec 06, 2017'),
    newsLink: 'https://www.prnewswire.com/news-releases/openebs-sponsor-cloudbyte-now-mayadata-and-launches-mayaonline-at-kubecon-662301483.html'
  }
];
