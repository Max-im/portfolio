export function getDate() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const fullMonth = month.toString().length === 1 ? `0${month}` : month;
  const day =
    dateObj.getUTCDate().toString().length === 1
      ? `0${dateObj.getUTCDate()}`
      : dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${year}${fullMonth}${day}`;
}
