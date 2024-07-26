import React from "react";
const SlideContent = ({ label, title, location }) => {
  return (
    <div className="content">
      <span className="label">{label}</span>
      <h2 className="title">{title}</h2>
      <p className="location">{location}</p>
    </div>
  );
};

export default SlideContent;
