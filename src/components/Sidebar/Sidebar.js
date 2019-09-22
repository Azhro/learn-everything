import React from "react";

export default function Sidebar(props) {
  const { color } = props;
  return (
    <div>
      <p>{color}</p>
    </div>
  );
}
