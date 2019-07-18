import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

const NotFoundPage = ({navigate, location}) => (
  <Layout navigate={navigate} location={location}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

NotFoundPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default NotFoundPage
