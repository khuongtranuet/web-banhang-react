import React, { Component } from "react";
import SliderRight from "../../components/Sliders/SliderRight";
import Sliders from "../../components/Sliders/Sliders";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Sliders />
          <SliderRight />
          <h1 className="col-lg-12">Trang chủ</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
