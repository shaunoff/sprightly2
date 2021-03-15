import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Test } from '@sprightly/ui'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-4xl font-bold font-sans mb-6">Hi people</h1>
      <p className="mb-6">Welcome to your new Gatsby site with Typescript & Tailwind CSS.</p>
      <Test testProp="blue" tet2={<div>hdfjhkfj</div>} />
      <p className="mb-6">Now go build something great.</p>
      <div className="flex flex-wrap justify-center items-center">
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={100}
          formats={['auto', 'webp', 'avif']}
          alt="A Gatsby astronaut"
          className="max-w-xs mb-6"
        />
        <div className="flex flex-wrap justify-center items-center">
          <StaticImage
            src="../images/gatsby-icon.png"
            width={80}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="A Gatsby icon"
            className="max-w-xs mx-1 mb-6"
          />
          <StaticImage
            src="../images/typescript-icon.png"
            width={80}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="A Typescript icon"
            className="max-w-xs mx-1 mb-6"
          />
          <StaticImage
            src="../images/tailwindcss-icon.png"
            width={80}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="A Tailwind CSS icon"
            className="max-w-xs mx-1 mb-6"
          />
        </div>
      </div>
      <p>
        <Link className="text-purple-600 underline hover:text-purple-800 active:text-purple-800" to="/page-2/">
          Go to page 2
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
