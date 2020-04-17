import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

interface Props {
  data: any
  location: any
}

const NotFoundPage: FC<Props> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
