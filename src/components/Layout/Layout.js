import React from 'react'
import PropTypes from 'prop-types'

import {Row, Col} from 'antd';
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive';
import {Layout as AntdLayout} from 'antd';
import {StaticQuery, graphql} from 'gatsby'

import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container';
import ResponsiveAnchor from '../ResponsiveAnchor';
import ResponsiveTopBar from '../ResponsiveTopBar';
import ResponsiveSidebar from '../ResponsiveSidebar';

import I18N from './I18N';
import classes from './Layout.module.scss';

class Layout extends React.Component {
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
                        {name: 'keywords', content: 'clouway, politis, fleerp, iam'},
                      ]}
                    >
                      <html lang='en'/>
                    </Helmet>
                    <AntdLayout>
                      <AntdLayout.Header className={classes.header}>
                        <Row>
                          <Col>
                            <Header siteTitle={data.site.siteMetadata.title} sidebarDocked={!matches}/>
                          </Col>
                        </Row>
                      </AntdLayout.Header>

                      <AntdLayout>
                        <AntdLayout.Content>
                          <Row>
                            <Col>
                              {(matches && onPostPage) ?
                                <ResponsiveTopBar root={sidebarRoot} slug={slug} language={language}/>
                                : null
                              }
                            </Col>
                          </Row>
                        </AntdLayout.Content>
                      </AntdLayout>

                      {(!matches && onPostPage) ?
                        <AntdLayout>
                          <AntdLayout.Sider>
                            <ResponsiveSidebar root={sidebarRoot} slug={slug} language={language}/>
                          </AntdLayout.Sider>
                          <AntdLayout.Content
                            className={classes.content}
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
                        <AntdLayout.Content className={classes.content}>
                          <Container sidebarDocked={!matches} onPostPage={onPostPage}>
                            {children}
                          </Container>
                        </AntdLayout.Content>
                      }

                      <AntdLayout.Footer className={classes.footer}>
                        <Row>
                          <Col>
                            <Footer />
                          </Col>
                        </Row>
                      </AntdLayout.Footer>
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
