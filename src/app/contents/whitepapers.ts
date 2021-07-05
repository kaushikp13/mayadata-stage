import { GTM } from "../constants/constants"
import { WHITEPAPER } from "../constants/content-types"

// latest to later .. Add latest one on the top of array.
export const whitepapers = [
  {
    title: 'Cost Savings',
    subtitle: 'Save 68% on public cloud storage costs with OpenEBS',
    url: 'assets/pdf/mayadata--cost-savings-on-aws-with-openebs.pdf',
    image_url: 'assets/images/resources/whitepapers/whitepaper-1.png',
    image_alt: 'Webinar',
    actionText: 'Read Now',
    className: GTM.TRIGGERS.WHITEPAPER,
    type: WHITEPAPER,
    name: 'Whitepaper'
  },
  {
    title: 'Data Agility for enterprise',
    subtitle: 'OpenEBS 1.3 and building workloads at scale',
    url: 'assets/pdf/openebs-1.3-whitepaper.pdf',
    image_url: 'assets/images/resources/whitepapers/whitepaper-1.png',
    image_alt: 'Webinar',
    actionText: 'Read Now',
    className: GTM.TRIGGERS.WHITEPAPER,
    type: WHITEPAPER,
    name: 'Whitepaper'
  },
  {
    title: 'Container Attached Storage (CAS) and OpenEBS',
    subtitle: 'OpenEBS 0.7',
    url: 'assets/pdf/WP-OpenEBS-0_7.pdf',
    image_url: 'assets/images/resources/whitepapers/whitepaper-1.png',
    image_alt: 'Webinar',
    actionText: 'Read Now',
    className: GTM.TRIGGERS.WHITEPAPER,
    type: WHITEPAPER,
    name: 'Whitepaper'
  }
]
