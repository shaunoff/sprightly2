/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { ReactElement, ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Header from './header'
// import './layout.css';

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps): ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div className="my-0 mx-auto max-w-4xl pt-0 px-4 pb-6">
        <main>{children}</main>
        <footer className="mt-8">
          © {new Date().getFullYear()}, Built with{' '}
          <Link
            className="text-purple-600 underline hover:text-purple-800 active:text-purple-800 font-sans"
            to="https://www.gatsbyjs.com"
          >
            Gatsby
          </Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
