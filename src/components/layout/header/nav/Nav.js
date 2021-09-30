import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "gatsby";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import "./nav.css";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
      
  return (
    <>

      <nav className="nav-body">
        {isOpen ? (
          <IoClose onClick={() => setIsOpen(!isOpen)} className="nav-icon"/>
        ) : (
          <FaBars onClick={() => setIsOpen(!isOpen)} className="nav-icon"/>
        )}
        <div className={ isOpen ? 'nav-menu open' : 'nav-menu close'}>
          <Link to="/" className="nav-link">
            Institucional
          </Link>
          <Link to="/galeria" className="nav-link">
            Galeria
          </Link>

          <Link to="/razas" className="nav-link">
            Razas
          </Link>
          <Link to="/resultados" className="nav-link">
            Resultados
          </Link>
          <Link to="/calendario" className="nav-link">
            Calendario
          </Link>
          <Link to="/sabiasque" className="nav-link">
            Sabias que?
          </Link>
        </div>
      </nav>
    </>
  );
};



const Bars = styled(FaBars)`

  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 999;

  }
`;

const Close = styled(IoClose)`

  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 999;

  }
`;


export default NavBar;
