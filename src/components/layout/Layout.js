import React from "react";
import "./globalStyles.css";
import { Helmet } from "react-helmet";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>SOCIEDAD DE AVICULTORES CABAÑEROS DEL URUGUAY</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&family=Playfair+Display:wght@500;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&family=Playfair+Display:wght@500;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
