import React from 'react';

import Link from 'components/Link'

import classes from './ProductBox.module.scss'

const ProductBox = ({product}) => (
  <div className={classes.box}>
    <h2 style={{marginBottom: 20, padding: 10}}>{product.title}</h2>
    <div className={classes.linkContainer}>
      {
        product.links.map((link, i) => <Link key={i} className={classes.link} to={link.href}>{link.title}</Link>)
      }
    </div>
  </div>
)

export default ProductBox
