import React from "react";
import Layout from "../components/layout/Layout";
import { Helmet } from "react-helmet";
import Estandar from "../components/estandar/Estandar";
import { graphql, useStaticQuery } from "gatsby";

const PlymouthrockPage = () => {
  const data = useStaticQuery(graphql`
  query ply {
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

  return( 
  <>
    <Helmet>
      <title>S.A.C.U. | ESTANDAR </title>
    </Helmet>
    <Layout>
      <Estandar content={content} />
    </Layout>
    ;
  </>
  )
};

export default PlymouthrockPage;
