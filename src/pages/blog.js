import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from "gatsby"
import Layout from '../components/Layout'
import PostCard from '../components/PostCard';
import NotFoundPage from "./404";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  navigate,
  location
}) => {
  const posts = edges
    .filter(edge => !! edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)
  return (
    <Layout navigate={navigate} location={location}>
      <div>{posts}</div>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default BlogPage

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { root: {eq: $path }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
