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
                <h1>About Curly Road</h1>
                <p>Curly Road is a blog created by Mara Estalilla to document her journey with the curly girl method towards achieving healthy natural hair. This blog also serves as an online guide or handbook for girls who also have curly hair and want to get started with the method.</p>


                <h1>About Mara</h1>
                <p>Mara Estalilla is a student from Manila taking AB-MMA in De La Salle - College of Saint Benilde. She created this blog to have somewhere to post about her progress and bits and pieces of new information she learns on the way to having healthy, natural hair.</p>

                <p>She does the CGM or the Curly Girl Method made and popularized by Lorraine Massey. This method entails avoiding certain harmful chemicals in hair products and doing techniques to enhance the appearance of curls.</p>
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
