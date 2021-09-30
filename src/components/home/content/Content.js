import React from "react";

import "./content.css";

import Institucional from "./institucional/Institucional";
import Directiva from "./directiva/Directiva";

const Content = () => {
  return (
    <div className="content-body">
      <div className="content-container">
        <Institucional/>
        <Directiva/>
       
      </div>
    </div>
  );
};

export default Content;
