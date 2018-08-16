export function random(min, max) { return Math.round(min + Math.random() * (max - min)); }
export const colors = [
  'red',
  'pink',
  'purple',
  'blue',
  'teal',
  'light-green',
  'lime',
  'orange'
];
export function getDateFromTimestamp(string) {
  return string.split('')
    .splice(0, 10)
    .join('')
    .split('-')
    .reverse()
    .join('/');
}
