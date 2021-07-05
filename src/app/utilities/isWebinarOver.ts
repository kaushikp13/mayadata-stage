import { isDateAheadOfCurrentDate } from "./compareDates";


export const isWebinarOver = (webinarDate: Date): boolean => {
  return !isDateAheadOfCurrentDate(webinarDate);
}

export const isEventOver = (eventDate: Date): boolean => {
  return !isDateAheadOfCurrentDate(eventDate);
}

export const webinarActionText = (webinarDate: Date): string => {
  if (isDateAheadOfCurrentDate(webinarDate)) {
    return 'Register Now';
  } else {
    return 'Watch Now';
  }
}


