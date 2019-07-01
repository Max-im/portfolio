import React from "react";

export default function index({ date, clasName }) {
  const theDate = new Date(date);
  const day =
    theDate.getDate() > 9 ? theDate.getDate() : "0" + theDate.getDate();
  const month =
    theDate.getMonth() + 1 > 9
      ? theDate.getMonth() + 1
      : "0" + (theDate.getMonth() + 1);
  const year = theDate.getFullYear();
  const formatedDate = `${day}/${month}/${year}`;

  return <p className={clasName}>{formatedDate}</p>;
}
