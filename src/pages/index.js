import * as React from "react";
import {Link} from "gatsby";


const IndexPage = ()=> {
  return(
    <div>
      <title>Home Page</title>
      <h1>Developer Blog</h1>
      <Link to="/about">About</Link>
      <p>I'm making this blog to exercise and document working with React.</p>
    </div>
  )
}

export default IndexPage
