import React from "react";
import SlideContent from "./SlideContent";

const Slide = ({ slide, style }) => {
  return (
    <div
      className="swiper-slide"
      style={{ ...style, backgroundImage: `url(${slide.image})` }}
    >
      <SlideContent
        label={slide.label}
        title={slide.title}
        location={slide.location}
      />
    </div>
  );
};

export default Slide;
