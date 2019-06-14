import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="About" />
                <h1>About</h1>
                <p>Curly Girl Philippines is a website created to serve as an online guide or handbook for girls who have naturally curly hair, specifically for Filipino girls. It aims to collect tips, techniques, and how-tos about starting your natural hair journey and maintaining it permanently; to encourage Filipina curly girls to embrace their own natural hair to prevent more damage from the usual harsh chemical hair treatments, and pass it onto and empower other, younger girls.</p>
            </Layout>
        )
    }
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
