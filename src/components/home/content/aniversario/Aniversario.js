import React from "react";

import "./aniversario.css";
import image from '../../../../images/aniversario.png'
const Aniversario = () => {
  return (
    <div className="aniv-body">
      <div className="aniversario">
        <div className="banner">
          <h3>¡Este 2021 cumplimos 80 exposiciones consecutivas en la Expo Prado! </h3>
        </div>
        <div className="aniversario-img">
          <img src={image} alt="aniversario" />
        </div>
      </div>
    </div>
  );
};

export default Aniversario;
