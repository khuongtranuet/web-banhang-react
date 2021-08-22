import React, { Component } from "react";
import Gallery from "../Header/Carousel";

class Sliders extends Component {
  render() {
    return (
      <>
        <div className="col-lg-9" style={{ paddingTop: "20px" }}>
          <Gallery />
        </div>
      </>
    );
  }
}

export default Sliders;
