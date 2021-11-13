import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import "./estandar.css";

import "./estandares.css";
const Estandares = ({ content }) => {
  return (
    <div className="estandares-body">
      <div className="estandares-container">
        <div >
          <Link to="/new-hampshire" className="estandares-link">New Hampshire</Link>
        </div>
        <div >
          <Link to="/plymouth-rock" className="estandares-link"> Plymouth Rock</Link>
        </div>
        <div >
          <Link to="/plymouth-rock-barreada" className="estandares-link">Plymouth Rock Barreada</Link>
        </div>
        <div >
          <Link to="/plymouth-rock-blanca" className="estandares-link">Plymouth Rock Blanca</Link>
        </div>

        <div >
          <Link to="/rhode-island" className="estandares-link">Rhode Island </Link>
        </div>
      </div>
    </div>
  );
};

export default Estandares;
