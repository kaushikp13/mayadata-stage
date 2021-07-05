export const companies = {
  title: `Trusted by`,
  list: [
    {
      name: 'Kafka',
      imageSrc: 'assets/images/home/companies/kafka.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'arista',
      imageSrc: 'assets/images/home/companies/arista.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'openEBS',
      imageSrc: 'assets/images/home/companies/openEBS.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'comcast',
      imageSrc: 'assets/images/home/companies/comcast.svg',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'magento',
      imageSrc: 'assets/images/home/companies/magento.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'cncf',
      imageSrc: 'assets/images/home/companies/cncf.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'elastic',
      imageSrc: 'assets/images/home/companies/elastic.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    },
    {
      name: 'litmus',
      imageSrc: 'assets/images/home/companies/litmus.png',
      // cta: {
      //   ctaLink: '/partners'
      // }
    }
  ],
  bloomberg: 'Bloomberg' //  Donot change the case of text.
}

export const mdHeroSection = {
  titleFirstPart: `Unleash`,
  titleSecondPart: ` Kubernetes for data`,
  subTitle: `Use K8s as your data plane, save money and move faster.`,
  description: `Kubera builds upon the #1 open source storage for Kubernetes, OpenEBS, and powers Kubernetes as your data layer.`,
  heroImageUrl: `assets/images/mayadata-landing/dmaas.png`,
  cta: {
    signUp: {
      link: null,
      title: `Sign Up Free`
    },
    pricing: {
      link: `/get-pricing`,
      title: `View Tiers`
    }
  }
}

export const titleStorage = {
  title: `What’s special about`,

};

export const storages: any = [
  {
    imageUrl: `assets/images/home/storage/storage-1.png`,
    alt: `Application defined`,
    title: `Application defined`,
    description: `OpenEBS is the most popular example of Container Attached Storage. CAS provides per workload storage, increasing the granularity of control and reducing the blast radius as compared to shared everything storage.`
  },
  {
    imageUrl: `assets/images/home/storage/storage-2.png`,
    alt: `Speed and efficiency`,
    title: `Speed and efficiency`,
    description: `Whether used for LocalPV or for replicated storage, OpenEBS can deliver much lower latency than shared storage while improving ease of use and efficiency as compared to simply using direct attached storage.`
  },
  {
    imageUrl: `assets/images/home/storage/storage-3.png`,
    alt: `Confidence and reliability`,
    title: `Confidence and reliability`,
    description: `OpenEBS is used in production by thousands of users thanks to the vibrant community, many of whom have contributed useful patterns and improvements including users of Cassandra, Cockroach, Yugabyte, PostgreSQL TiDB, Elasticsearch, Kafka and many other common workloads.`
  },
  {
    imageUrl: `assets/images/home/storage/storage-4.png`,
    alt: `Enterprise support and operations`,
    title: `Enterprise support and operations`,
    description: `MayaData customers include Bloomberg, Flipkart, Optoro and many others that use OpenEBS to run everything from analytics to ecommerce workloads. MayaData engineers assist customers in the use of Kubernetes as their data layer. Many options are available.`
  }
]

export const silderContent = [
  {
    authorName: "Ren Lee",
    authorContent: "SRE at Arista Networks",
    content: `If we want data redundancy, what’s the quickest way to solve it? OpenEBS is great [..] it’s been such a time saver. Especially for applications that need data redundancy for data spread across multiple nodes.`,
    image: "assets/images/home/arista.png",
    alt_text: "Arista Networks"
  },
  {
    authorName: "Derrick DaCosta",
    authorContent: "Senior Engineer at Comcast",
    content: `We are really happy with OpenEBS. We use it to help operate our Kubernetes including monitoring, alerting, and metrics gathering applications (Prometheus, Alertmanager, and Influxdb).`,
    image: "assets/images/home/comcast.png",
    alt_text: "Comcast"
  }
]
