import React from "react";
import "./globalStyles.css";
import { Helmet } from "react-helmet";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import imageUrl from '../../images/logo.jpg'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet  meta={[
                { property: 'og:image', content: imageUrl },
                { property: "og:image:width", content:"400" },
                { property: "og:image:width", content:"50" },
                {name: 'icon', href: imageUrl}
              ]}>

             
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
