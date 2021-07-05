import { BLOG } from "../constants/content-types"
import { GTM } from "../constants/constants"

export const blogs = [
  {
    title: `Kubera : cloud-native operations of Kubernetes as your data plane`,
    subtitle: ``,
    description: `Kubera is SaaS that makes it easy to use Kubernetes itself as your data layer. It is free forever for individual use.`,
    url: `https://blog.mayadata.io/kubera-cloud-native-operations-of-kubernetes-as-your-data-plane`,
    image_url: `assets/images/mayadata-landing/kubera-launch-blog.png`,
    image_alt: `Kubera - cloud-native operations of Kubernetes as your data plane`,
    actionText: `Read Now`,
    date: new Date(2020, 6, 15),
    externalLink: true,
    className: GTM.TRIGGERS.BLOG,
    type: BLOG
  },
  {
    title: `Building Kubernetes Operators Can be Simple`,
    subtitle: ``,
    description: `A Kubernetes operator is nothing but an object that extends Kubernetes functionality using the atomic and modular nature of Kubernetes to create a controller that responds to a specific set of events and executes some custom actions as a result of that.`,
    url: `https://blog.mayadata.io/building-kubernetes-operators-can-be-simple`,
    image_url: `https://blog.mayadata.io/hubfs/Building%20Kubernetes%20Operators.png`,
    image_alt: `Building Kubernetes Operators Can be Simple`,
    actionText: `Read Now`,
    date: new Date(2020, 6, 9),
    externalLink: true,
    className: GTM.TRIGGERS.BLOG,
    type: BLOG
  },
  {
    title: `Testing Kubernetes operators - leading alternatives and some suggestions`,
    subtitle: ``,
    description: `You probably have seen many articles on how to design Kubernetes operators. However, the same is not correct when we start talking about the ways of testing Kubernetes operators.`,
    url: `https://blog.mayadata.io/testing-kubernetes-operators`,
    image_url: `https://cdn2.hubspot.net/hub/5310829/hubfs/Testing%20Kubernetes%20operators%20-%20tailwind_headwind%20for%20your%20operations_.png`,
    image_alt: `Testing Kubernetes operators - leading alternatives and some suggestions`,
    actionText: `Read Now`,
    date: new Date(2020, 6, 4),
    externalLink: true,
    className: GTM.TRIGGERS.BLOG,
    type: BLOG
  }
];

