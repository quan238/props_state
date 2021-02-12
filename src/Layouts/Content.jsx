import React, { Component } from "react";
import ListGlasses from "../Components/ListGlasses";
import Model from "../Components/Model";

export default class Content extends Component {
  render() {
    return (
      <div className="layer pb-5">
        <h1
          className="text-center "
          style={{ backgroundColor: "rgba(33,37,41,0.8)" }}
        >
          Try Glasses App Online
        </h1>
        <Model></Model>
        <ListGlasses></ListGlasses>
      </div>
    );
  }
}
