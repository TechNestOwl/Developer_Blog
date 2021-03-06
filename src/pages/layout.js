import * as React from "react";
import {
    Link,
    useStaticQuery,
     graphql} from "gatsby";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle, 
  } from './layout.module.css';

// import Header from './header';

const Layout = ({pageTitle, children})=> {
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
            title
            }
        }
        }
    `)
    return(
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={navLinkText}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;