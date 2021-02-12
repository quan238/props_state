import React, { Component } from "react";
// import GlassModel from "./GlassModel";

export default class Glasses extends Component {
  render() {
    let { g } = this.props;
    return (
      <div className=" m-3" id="glasses" onClick={()=> this.props.onGlassModel(g.url)}>
        <div className="card " style={{ width: "330px", borderRadius: "10px" }}>
          <div
            style={{
              backgroundImage: `url('${g.url}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img
              style={{ opacity: 0 }}
              width="100"
              height="110"
              className="card-img-top"
              src={g.url}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
