import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import Layout from '../components/Layout';
import { connect } from 'react-redux'
import { onSidebarContentExpand } from '../actions/layout'
import 'katex/dist/katex.min.css'
import { getSidebarExpandedKey } from '../store/selectors';

const SplitPanel = ({children}) => {
  // The AST contains '\n' string values which are messing indexes   
  // and for this reason they are filtered.
  const childs = children.filter(it => typeof it !== 'string')

  return <div style={{width: '100%', display: 'flex', justifyContent: 'space-around',  flexDirection: 'row'}}>
            <div style={{flex: 1}}>{childs[0]}</div>
            <div style={{flex: 1}}>{childs[1]}</div>
        </div>
}

const Panel = ({children}) => {
  return <div>{children}</div>
}

const Bullet = () => {
  return <span>&#8226;</span>
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'panel': Panel,
    'bullet': Bullet,
    'split-panel': SplitPanel
  }
}).Compiler


function Template({
  data, // this prop will be injected by the GraphQL query below.
  navigate,
  location,
  onSidebarContentExpand,
  expandedKey,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst, fields, id } = markdownRemark
  const language = fields.langKey

  if (expandedKey !== id) {
    onSidebarContentExpand(id)
  }
  return (
    <Layout
      slug={markdownRemark.fields.slug}
      language={language}
      navigate={navigate}
      location={location}
      onPostPage={true}
      sidebarRoot={frontmatter.root}
    >
    <div className='blog-post-container'>
      <div className='blog-post'>
        <div
          className='blog-post-content'
        >
          {renderAst(htmlAst)}
        </div>
      </div>
    </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    expandedKey : getSidebarExpandedKey(state)
  }
}

const mapDispatchToProps = {
  onSidebarContentExpand,
}

export default connect(mapStateToProps, mapDispatchToProps) (Template)

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        langKey
      }
      id
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        root
      }
    }
  }
`
