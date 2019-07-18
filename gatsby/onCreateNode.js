// import { replacePath } from './utils'
const replacePath = require('./utils')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.internal.fieldOwners.slug !== 'gatsby-plugin-i18n') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    
    createNodeField({
      node,
      name: `slug`,
      value: replacePath(slug),
    })

    // A priority field used for sorting of items on the page.
    createNodeField({
      node,
      name: `priority`,
      value: 5,
  });
  }
}