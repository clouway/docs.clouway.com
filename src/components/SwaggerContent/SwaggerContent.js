import React from 'react'
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title'

import {Tabs} from 'antd';
import {StaticQuery, graphql} from 'gatsby'

import Link from 'components/Link'
import Swagger from './Swagger'

import './SwaggerContent.css'

export class SwaggerContent extends React.Component {
  static propTypes = {
    docs: PropTypes.object.isRequired,
    paths: PropTypes.object.isRequired
  }

  render() {
    const { docs, paths } = this.props

    return (
      <StaticQuery
        query={graphql`
          query TitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <div>
              <div
                style={{
                  top: 0,
                  width: '100%',
                  height: 55,
                  background: 'cornflowerblue',
                  position: 'sticky',
                  zIndex: 99
                }}
              >
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 1360,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div style={{float: 'left'}}>
                    <h1 style={{fontSize: '1.25rem', margin: '15px 20px'}}>
                      <Link
                        to=""
                        style={{
                          color: 'white',
                          textDecoration: 'none',
                        }}
                      >
                        {data.site.siteMetadata.title}
                      </Link>
                    </h1>
                  </div>
                </div>
              </div>
              <Tabs
                tabPosition='left'
                defaultActiveKey='pois'
                tabBarStyle={{textTransform: 'capitalize'}}
              >
                {Object.entries(paths).map(i => {
                  return (
                    <Tabs.TabPane tab={i[0]} key={i[0]}>
                      <DocumentTitle title='API'>
                        <Swagger
                          prefix='https://my.fleerp.com/api/v1'
                          definitions={docs.definitions}
                          documentation={i[1]}
                        />
                      </DocumentTitle>
                    </Tabs.TabPane>
                  )
                })}
              </Tabs>
            </div>
          )
        }}
      />
    )
  }
}

export default SwaggerContent
