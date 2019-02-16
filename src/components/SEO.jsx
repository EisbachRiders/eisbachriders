import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ pathname, article, language }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
        },
      },
    }) => {
      const seo = {
        url: `${siteUrl}${pathname || '/'}`,
      }

      return (
        <>
          <Helmet
            title={defaultTitle}
            htmlAttributes={{ lang: language ? language : 'en' }}
          >
            <meta name="description" content={defaultDescription} />
            <meta name="image" content={defaultImage} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={defaultDescription} />
            <meta property="og:image" content={defaultImage} />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  pathname: PropTypes.string,
  article: PropTypes.bool,
  language: PropTypes.string,
}

SEO.defaultProps = {
  pathname: '/',
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
