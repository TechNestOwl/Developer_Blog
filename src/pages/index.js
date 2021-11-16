import * as React from "react";
// import {Link} from "gatsby";
import Layout from "./layout";
import Blog from './blog';
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = ()=> {
  return(
    <div>
      {/* <h1>Developer Blog</h1> */}
      <Layout pageTitle="Home Page">
        <p>I'm making this blog to exercise and document working with React.</p>
        <StaticImage
          alt="We don't have bad days"
          src='../images/noBadDays.jpg'
        />
      </Layout>
      {/* <StaticImage
      alt="no Image here"
      src="../images/noBadDays"
      /> */}
    </div>
  )
}

export default IndexPage;
