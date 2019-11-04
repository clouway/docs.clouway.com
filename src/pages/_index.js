import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import ProductBox from '../components/ProductBox'

const IndexPage = ({navigate, location}) => {

  const products  = [
    {
      title: 'Politis',
      links: [
        {
          title: 'Documentation',
          href: '/politis/get-started/introduction',
        }
      ]
    },
    {
      title: 'Fleerp',
      links: [
        {
          title: 'Documentation',
          href: '/fleerp/docs/get-started/tracker-activation'
        },
        {
          title: 'API Docs',
          href: '/api/fleerp/swagger'
        }
      ]
    },
    {
      title: 'IAM',
      links: [
        {
          title: 'Documentation',
          href: '/iam/docs/get-started/user-registration'
        }
      ]
    }
  ]

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

          <div style={{display: 'flex', justifyContent: 'center'}}>
            {
              products.map((product, i) => <ProductBox key={i} product={product} />)
            }
          </div>
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
