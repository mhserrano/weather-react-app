import React from "react";

export default function FormattedDate(props) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekDay = weekDays[props.date.getDay()];
  let day = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <h2>
        {weekDay}, {day} {month}
      </h2>
      <h2>
        Last updated at: {hours}h{minutes}
      </h2>
    </div>
  );
}
