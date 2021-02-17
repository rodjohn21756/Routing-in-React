import React from "react";
import { Route } from "react-router-dom";

function Welcome(props) {
  if (props.match.params.name) {
    return <div className="Welcome">Welcome, {props.match.params.name}!</div>;
  } else {
    return <div className="Welcome">Welcome, {props.name}!</div>;
  }
}

export default Welcome;
