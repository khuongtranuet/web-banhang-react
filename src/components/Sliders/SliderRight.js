import React, { Component } from "react";
import Anh1 from "../../images/anhvuong1.png";
import Anh2 from "../../images/anhvuong2.png";
import Anh3 from "../../images/anhvuong3.png";
import Anh4 from "../../images/anhvuong4.png";

class SliderRight extends Component {
  render() {
    return (
      <>
        <div className="col-lg-3" style={{ paddingTop: "20px" }}>
          <div className="row preorder-hot">
            <img src={Anh1} alt="Anh iphone 11" className="img-slider" />

            <img src={Anh2} alt="Anh iphone" className="img-slider" />

            <img src={Anh3} alt="Anh iphone 11" className="img-slider" />

            <img src={Anh4} alt="Anh iphone" className="img-slider" />
          </div>
        </div>
      </>
    );
  }
}

export default SliderRight;
