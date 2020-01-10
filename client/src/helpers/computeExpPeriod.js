export const computeExperiencePeriod = exp => {
  const dateFrom = new Date(exp.from);
  const dateTo = exp.isCurrent ? new Date() : new Date(exp.to);
  const expTime = Math.abs(dateTo - dateFrom);
  const expDays = Math.ceil(expTime / (1000 * 60 * 60 * 24));
  const expYears = Math.floor(expDays / 365);
  const expMonth = Math.round((expDays % 365) / 30);
  let date = "";
  if (expYears > 1) {
    date = `${expYears} Years, ${expMonth} Month`;
  } else if (expYears > 0) {
    date = `${expYears} Year, ${expMonth} Month`;
  } else {
    date = `${expMonth} Month`;
  }
  return date;
};
