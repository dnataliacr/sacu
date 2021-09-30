import React from "react";

import "./title.css";
const Title = ({ title }) => {
  return (
    <div className="title-body-img">
      <div className="title-border">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
