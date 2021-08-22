import React from "react";
import Carousel from "react-grid-carousel";
import slider1 from "../../images/slide1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import slider4 from "../../images/slider4.png";

function Gallery() {
  return (
    <div className="carousel">
      <Carousel cols={1} rows={1} gap={10} loop autoplay={3000} showDots>
        <Carousel.Item>
          <img width="100%" src={slider1} alt="anh so 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={slider2} alt="anh so 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={slider3} alt="anh so 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={slider4} alt="anh so 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
