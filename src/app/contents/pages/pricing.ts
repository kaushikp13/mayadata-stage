export const pricingOverview = {
  basic: {
    title: `Basic`,
    description: `Basic monitoring for POCs & small projects`,
    pricingRate: {
      price: {
        currency: `$`,
        amount: `0`
      },
      per: `per user per month`,
    },
    cta: {
      ctaText: 'Try Now',
      ctaUrl: 'https://director.mayadata.io/subscriptions'
    },
    priorBenefits: ``,
    features: [
      `Single user`,
      `Up to 3 clusters`,
      `Runs on any Kubernetes`,
      `Pre flight checks`,
      `Dynamic management`,
      `Community support`
    ]
  },
  standard: {
    title: `Standard`,
    description: `Use Kubernetes as your data layer at scale`,
    pricingRate: {
      price: {
        currency: `$`,
        amount: `49`
      },
      latestPrice: {
        currency: `$`,
        amount: `79`
      },
      per: `per user per month`,
    },
    cta: {
      ctaText: 'Try Now',
      ctaUrl: 'https://director.mayadata.io/subscriptions'
    },
    priorBenefits: `All benefits of the basic plan plus:`,
    features: [
      `Up to 10 users`,
      `Up to 5 clusters`,
      `Scales infinitely with Kubernetes`,
      `Unlimited backups and pre-staged DR`,
      `8/5 Enterprise support`
    ],
    exclusiveNotes: null
  },
  enterprise: {
    title: `Enterprise`,
    description: `The support & features your enterprise needs`,
    pricingRate: {
      price: {
        currency: null,
        amount: 'Unlimited'
      },
      nodePrice: {
        currency: `$`,
        amount: `265`
      },
      per: `per node per month`,
    },
    cta: {
      ctaText: 'Try Now',
      ctaUrl: 'https://director.mayadata.io/subscriptions'
    },
    priorBenefits: `All benefits of the standard plan plus:`,
    features: [
      `Unlimited users`,
      `Unlimited clusters`,
      `starts at 4 nodes minimum`,
      `No additional charges for subscriptions over 400 nodes`,
      `Compliance reporting and alerting`,
      `Performance pre-checks and profiling`,
      `Backup & Data Migration`,
      `On-Prem support`,
      `AD Authentication integration`,
      `24/7 Enterprise Support`
    ]
  }
}

