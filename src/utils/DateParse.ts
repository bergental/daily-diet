function padStart(value: number) {
  return value.toString().padStart(2, '0');
}

export function parseDateWithoutTime(date: Date, separator: string = '/') {
  return `${padStart(date.getDate())}${separator}${padStart(date.getMonth()+1)}${separator}${date.getFullYear()}`
}

export function parseHourMinute(date: Date, separator: string = ':') {
  return `${padStart(date.getHours())}${separator}${padStart(date.getMinutes())}`
}

export function strToDate(date: string, time: string) {
  const dateParts = date.split("/");
  const timeParts = time.split(":");
  
  return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]), parseInt(timeParts[0]), parseInt(timeParts[1]));
}