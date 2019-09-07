export const trimTime = (stringTime) => {
  const hours = stringTime.match(/^(.*?):/)[1];
  return `${hours}h`;
}