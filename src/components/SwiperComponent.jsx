import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide.jsx";
import SlideContent from "./SlideContent.jsx";

const SwiperComponent = ({ slideData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const isDragging = useRef(false);
  const isTransitioning = useRef(false);

  useEffect(() => {
    let swipeCount = 0;
    const swipeInterval = setInterval(() => {
      if (swipeCount < 5) {
        changeSlide(1);
        swipeCount++;
      } else {
        clearInterval(swipeInterval);
      }
    }, 1000);

    return () => clearInterval(swipeInterval);
  }, []);

  const changeSlide = (direction) => {
    if (isTransitioning.current) return;

    const totalSlides = slideData.length;
    let newIndex = activeIndex + direction;
    newIndex = (newIndex + totalSlides) % totalSlides;

    setActiveIndex(newIndex);
    isTransitioning.current = true;
    setTimeout(() => (isTransitioning.current = false), 500);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (isTransitioning.current) return;

    if (event.deltaY > 0) {
      changeSlide(1);
    } else {
      changeSlide(-1);
    }
  };

  const handleMouseDown = (event) => {
    setDragStart(event.clientX);
    isDragging.current = true;
  };

  const handleMouseMove = (event) => {
    if (isDragging.current) {
      const dragEnd = event.clientX;
      if (dragStart - dragEnd > 75) {
        changeSlide(1);
        isDragging.current = false;
      } else if (dragEnd - dragStart > 75) {
        changeSlide(-1);
        isDragging.current = false;
      }
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (event) => {
    event.preventDefault();
    setDragStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    const dragEnd = event.touches[0].clientX;
    const dragDistance = dragStart - dragEnd;

    if (Math.abs(dragDistance) > 50) {
      const direction = dragDistance > 0 ? 1 : -1;
      changeSlide(direction);
    }
  };

  const handleTouchEnd = () => {
    setDragStart(null);
  };

  const getSlideStyle = (index) => {
    const position = index - 2;
    const scale = index === 2 ? 1 : index === 1 || index === 3 ? 0.8 : 0.64;
    const grayscale = index === 2 ? 0 : index === 1 || index === 3 ? 70 : 100;

    return {
      transform: `translateX(${position * 30}%) scale(${scale})`,
      filter: `grayscale(${grayscale}%)`,
      zIndex: 3 - Math.abs(index - 2),
    };
  };

  const renderSlide = (index) => {
    const totalSlides = slideData.length;
    const adjustedIndex = (activeIndex + index + totalSlides) % totalSlides;
    const slide = slideData[adjustedIndex];

    return <Slide key={slide.id} slide={slide} style={getSlideStyle(index)} />;
  };

  return (
    <div
      className="swiper-container"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {[0, 1, 2, 3, 4].map((index) => renderSlide(index))}
    </div>
  );
};

export default SwiperComponent;
