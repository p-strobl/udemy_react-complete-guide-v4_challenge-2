import React from "react";
import "./CharComponent.css";

const charComponent = props => {
  if (props.text.length > 0) {
    return (
      <div onClick={props.click} className="CharComponent">
        {props.text}
      </div>
    );
  } else {
    return null;
  }
};

export default charComponent;
