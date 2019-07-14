
const replacePath = require('./utils')
const path = require("path")

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(        
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {            
            fields {
              slug
              langKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {         
      createPage({                  
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug          
        }
      })      
    })
  })
}