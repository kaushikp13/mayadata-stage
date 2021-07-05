import { WEBINAR } from "../constants/content-types"
import { GTM } from "../constants/constants"
import { isWebinarOver } from "../utilities/isWebinarOver"
import { solutiondocs } from "./solutiondocs";
import { casestudies } from "./casestudies";
import { whitepapers } from "./whitepapers";
import { webinars } from "./webinars";
import { blogs } from "./blogs";
// add 2 solution docs, 1 casestudies and 2 whitepapers
export const homepageResourcesRss = {
  main: casestudies[0],
  resources: [
    casestudies[1],
    blogs[0],
    whitepapers[0],
    webinars[1]
  ]
}
