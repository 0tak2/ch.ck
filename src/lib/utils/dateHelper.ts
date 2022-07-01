export function toKrDate(curr: Date) {
    const utc = 
      curr.getTime() + 
      (curr.getTimezoneOffset() * 60 * 1000);

    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = 
        new Date(utc + (KR_TIME_DIFF));

    return kr_curr
}

export function toTimestring(dateRaw: Date) {
  let timeString = dateRaw.getFullYear() + "년 " + (dateRaw.getMonth() + 1) + "월 " + dateRaw.getDate() + "일 "
            + dateRaw.getHours() + ":" + dateRaw.getMinutes();
  return timeString;
}