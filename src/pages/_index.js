import React from 'react'
import PropTypes from 'prop-types'

import Button from 'antd/lib/button'

import Link from 'components/Link'

import Layout from '../components/Layout'

const IndexPage = ({navigate, location}) => {
  return (
    <Layout navigate={navigate} location={location}>
      <div>
        <div align="center">
          <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            Try. Use. Grow.
          </p>
          <h4>Всичко от което имаш нужда за твоя бизнес</h4>
          <br/>
          <Link to="/politis/get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Politis</Button>
          </Link>

          <Link to="/fleerp/docs/get-started/tracker-activation">
            <Button type="primary" size="large" style={{marginRight: 10}}>Fleerp</Button>
          </Link>

          <Link to="/iam/docs/get-started/user-registration">
            <Button type="primary" size="large" style={{marginRight: 10}}>IAM</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default IndexPage
