import { WEBINAR } from "../constants/content-types"
import { GTM } from "../constants/constants"
import { isWebinarOver } from "../utilities/isWebinarOver"
import { webinars } from "./webinars"
import { blogs } from "./blogs"
// current events - webinarss
export const homepageEventsRss = {
  current: webinars[0],
  past: webinars.slice(1, 3),
  blogs: blogs.slice(0, 2)
};
