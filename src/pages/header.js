import React from "react";

import { useStaticQuery, graphql } from 'gatsby'


export default function Header(){

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata 
            {title}}
  }`);

  return (
      <header>
          <h1>{data.site.siteMetadata.title}</h1>
      </header>
  )
}


// Reveiew this component and see if it is necessary 