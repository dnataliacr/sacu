import React from "react";
import logo from "../../../../images/logo.jpg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-body">
      <div className="logo-image">
        <img
          alt="logo"
          style={{ width: "120px", height: "140px" }}
          src={logo}
        />
      </div>
      <h2 className="logo-text">
        {" "}
        SOCIEDAD DE AVICULTORES CABAÑEROS DEL URUGUAY{" "}
      </h2>
    </div>
  );
};


export default Logo