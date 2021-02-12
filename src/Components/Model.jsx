import React, { Component } from "react";
import GlassModel from "./GlassModel";

export default class Model extends Component {
    render() {
    return (
      <div className="my-5 container card" id="model" style={{ width: "400px",position:"relative" }} >
        <img src="./glassesImage/model.jpg" style={{ width: "100%" }} alt="" />
        <GlassModel></GlassModel>
      </div>
    );
  }
}
