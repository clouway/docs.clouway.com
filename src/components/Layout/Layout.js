import React from 'react'
import PropTypes from 'prop-types'

import Row from 'antd/lib/row';
import Col from 'antd/lib/col'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive';
import {default as AntdLayout} from 'antd/lib/layout';
import {StaticQuery, graphql} from 'gatsby'

import Header from '../Header/Header'
import Container from '../Container';
import ResponsiveAnchor from '../ResponsiveAnchor';
import ResponsiveTopBar from '../ResponsiveTopBar';
import ResponsiveSidebar from '../ResponsiveSidebar';

import './Layout.css'
import I18N from './I18N';

class Layout extends React.Component {
  setPostPageState = (state) => {
    this.props.setPostPageState(state)
  }

  render() {
    const {
      slug,
      navigate,
      location,
      language,
      children,
      onPostPage,
      sidebarRoot
    } = this.props

    return (
      <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => {
          return (
            <I18N navigate={navigate} location={location}>
              <MediaQuery maxWidth={1000}>
                {(matches) => (
                  <>
                    <Helmet
                      title={data.site.siteMetadata.title}
                      meta={[
                        {name: 'description', content: 'clouWay Product Docs'},
                        {name: 'keywords', content: 'clouway, politis, fleerp'},
                      ]}
                    >
                      <html lang='en'/>
                    </Helmet>
                    <AntdLayout>
                      <AntdLayout.Header
                        style={{
                          position: 'fixed',
                          top: 0,
                          width: '100%',
                          zIndex: 100,
                        }}
                      >
                        <Row>
                          <Col>
                            <Header siteTitle={data.site.siteMetadata.title} sidebarDocked={!matches}/>
                          </Col>
                          <Col>
                            {(matches && onPostPage) ?
                              <ResponsiveTopBar root={sidebarRoot} slug={slug} language={language}/>
                              : null
                            }
                          </Col>
                        </Row>
                      </AntdLayout.Header>

                      {(!matches && onPostPage) ?
                        <AntdLayout>
                          <AntdLayout.Sider>
                            <ResponsiveSidebar root={sidebarRoot} slug={slug} language={language}/>
                          </AntdLayout.Sider>
                          <AntdLayout.Content
                            style={{
                              position: 'absolute',
                              left: '20%',
                              right: '15%',
                            }}
                          >
                            <Container sidebarDocked={!matches} onPostPage={onPostPage}>
                              {children}
                            </Container>
                          </AntdLayout.Content>
                          <AntdLayout.Sider>
                            <ResponsiveAnchor/>
                          </AntdLayout.Sider>
                        </AntdLayout>
                        :
                        <AntdLayout.Content>
                          <Container sidebarDocked={!matches} onPostPage={onPostPage}>
                            {children}
                          </Container>
                        </AntdLayout.Content>
                      }
                    </AntdLayout>
                  </>)
                }
              </MediaQuery>
            </I18N>
          )
        }}
      />
    )
  }
}

Layout.propTypes = {
  language: PropTypes.string,
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
