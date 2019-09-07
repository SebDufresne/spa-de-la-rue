export const trimTime = (stringTime : string) => {
  const hours = stringTime.match(/^(.*?):/);
  if (hours && hours.length > 1) {
    return `${hours[1]}h`;
  } else {
    return '';
  }
}