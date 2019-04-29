import React from "react";
import "./View1.css";

export default function View1(props) {
  return (
    <div className={props.greyedOut && "modal-open"}>
      <h1>This is view 1</h1>
    </div>
  );
}
