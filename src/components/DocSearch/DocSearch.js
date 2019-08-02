import React from 'react'
import {Input, Tag} from 'antd'
import {graphql, StaticQuery, Link} from 'gatsby'

import classes from './DocSearch.module.scss'

export class DocSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      show: false
    }
  }

  search = ({target}) => {
    const query = target.value.toString().toLowerCase()
    this.setState({query})
  }

  focus = () => {
    this.setState({
      query: '',
      show: true
    })
  }

  blur = () => {
    setTimeout(() => {
      this.setState({
        query: '',
        show: false
      })
    }, 100)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query contentQuery {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  id
                  frontmatter {
                    title
                    root
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const results = [];

          data.allMarkdownRemark.edges.map(({node}) => {
            const {query} = this.state
            const title = node.frontmatter.title.toString().toLowerCase()

            if (query && title.includes(query)) {
              results.push({
                slug: node.fields.slug,
                title: node.frontmatter.title,
                product: node.frontmatter.root.split('/')[1].toUpperCase()
              })
            }
          })

          return (
            <div className={classes.container}>
              <Input.Search
                size='small'
                className={classes.input}
                value={this.state.query}
                onChange={this.search}
                onFocus={this.focus}
                onBlur={this.blur}
              />
              {
                this.state.show && results.length > 0 && (
                  <div className={classes.resultBox}>
                    {
                      results.map((v, i) => (
                        <div key={i} className={classes.item}>
                          <Link to={v.slug}>
                            {v.title}
                          </Link>
                          <Tag color={'#1890ff'} className={classes.tag}>
                            {v.product}
                          </Tag>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          )
        }}
      />
    )
  }
}

export default DocSearch
