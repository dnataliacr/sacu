import React from "react";
import Layout from "../components/layout/Layout"
import { Helmet } from "react-helmet";
import Estandar from "../components/estandar/Estandar";
import { graphql, useStaticQuery } from "gatsby";

const NewhampshirePage = () => {
  const data = useStaticQuery(graphql`
  query new {
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
  const content = data.allMarkdownRemark.edges[3].node
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

export default NewhampshirePage;
