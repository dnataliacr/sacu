import React from "react";

import "./content.css";

import Aniversario from "./aniversario/Aniversario.js";
import Institucional from "./institucional/Institucional";
import Directiva from "./directiva/Directiva";

const Content = () => {
  return (
    <div className="content-body">
      <div className="content-container">
        <Aniversario />
        <Institucional />
        <Directiva />
      </div>
    </div>
  );
};

export default Content;
