
export const isDateAheadOfCurrentDate = (date: Date): boolean => {
  // In javascript, months start from 0, eg => jan = 0, feb = 1, march = 2
  const dateTime = date.getTime();
  const currentTime = new Date().getTime();
  if (dateTime > currentTime) {
    return true;
  } else {
    return false;
  }
}
