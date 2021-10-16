export default function getFormattedDate(rawDate) {
  const date = new Date(rawDate)
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}