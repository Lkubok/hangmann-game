export const dateToHuman = dateStamp => {
  const date = new Date(dateStamp);
  const year = date.getFullYear().toString();
  return `${year.slice(-2)}-${date.getMonth() + 1}-${date.getDate()}`;
};
