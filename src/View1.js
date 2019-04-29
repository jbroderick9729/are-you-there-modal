import React from "react";

export default function View1(props) {
  return (
    <div className={props.greyedOut && "modal-open"}>
      <h1>This is view 1</h1>
    </div>
  );
}
