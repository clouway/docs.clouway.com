import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            Try. Use. Grow.
          </p>
          <h4>Всичко от което имаш нужда за твоя бизнес</h4>          
          <br/>
          <Link to="/bg/politis/get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Politis</Button>
          </Link>

          <Link to="/bg/fleerp/get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Fleerp</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
