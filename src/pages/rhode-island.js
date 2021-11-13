import React from "react";
import Layout from "../components/layout/Layout";
import { Helmet } from "react-helmet";
import Estandar from "../components/estandar/Estandar";
import { graphql, useStaticQuery } from "gatsby";

const RhodeIslandPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
      
    }
  }
  
  `)
  const content = data.allMarkdownRemark.edges[0].node
  
console.log(content)
  return (
    <>
      <Helmet>
        <title>S.A.C.U. | ESTANDAR </title>
      </Helmet>
      <Layout>
        <Estandar content={content}/>
      </Layout>
      ;
    </>
  );
};

export default RhodeIslandPage;
