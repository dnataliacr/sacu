import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import './estandar.css'
const Estandar = ({content}) => {
 


  return (
    <div className="estandar-body">
      <div className="estandar-container">
        
      <h2>{content.frontmatter.title}</h2>
      <div
          className="estandar-text"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
</div>

    </div>
  );
};

export default Estandar;
