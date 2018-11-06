import React from "react";

const validationComponent = props => {
  const validateLength = () => {
    let determineText = null;
    if (props.inputLength === 0) {
      determineText = "";
    } else if (props.inputLength >= 1 && props.inputLength <= 4) {
      determineText = "Text too short!";
    } else if (props.inputLength > 4) {
      determineText = "Text is long enough!";
    }
    return determineText;
  };
  return <div>{validateLength()}</div>;
};

export default validationComponent;
