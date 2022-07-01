function toTimestring(dateRaw) {
  let timeString = dateRaw.getFullYear() + "\uB144 " + (dateRaw.getMonth() + 1) + "\uC6D4 " + dateRaw.getDate() + "\uC77C " + dateRaw.getHours() + ":" + dateRaw.getMinutes();
  return timeString;
}
export { toTimestring as t };
