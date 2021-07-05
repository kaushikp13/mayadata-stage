import { GTM } from "../constants/constants"
import { OPENSOURCEPROJECTS } from "../constants/content-types"

export const opensourceprojects = [

    {
        subtitle: `In a typical Data Centre, a significant percentage of the servers will be running Microsoft Windows. This represents a huge, untapped opportunity to extend the deployment of Storage Performance Development Kit (SPDK). <a href="https://spdk.io/news/2021/03/11/spdk_on_windows"  target="_blank" >Learn more about the use cases</a>`,
        logo: 'assets/images/workloads/prometheus.png',
        title: "Storage Performance Development Kit",
        modalDataTarget: false,
        url: 'https://spdk.io/news/2021/03/11/spdk_on_windows',
        image_url: 'assets/images/resources/hands-ons/hands-on-2.png',
        image_alt: 'OpenSource projects',
        actionText: 'Read More',
        externalLink: true,
        className: GTM.TRIGGERS.OPENSOURCEPROJECTS,
        type: OPENSOURCEPROJECTS,
        name: 'Open&#8209;Source&nbsp;&nbsp;Projects'

    },
]
