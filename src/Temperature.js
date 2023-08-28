import React from "react";

export default function Temperature(props) {
  let celsius = props.celsius;

  return <span>{celsius}°C</span>;
}
