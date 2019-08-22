import React from 'react'

import Swagger from '../../../components/SwaggerContent/index'

import docs from './fleerp.json'

export class SwaggerWrapper extends React.Component {
  static propTypes = {}

  render() {
    const items = {}

    for (let [key, value] of Object.entries(docs.paths)) {
      const item = key.split('/')[1]

      if(!items[item]) {
        items[item] = []
      }

      items[item] = [...items[item], {key, value}] 
    }

    const paths = {};

    Object.keys(items).sort().forEach(function(key) {
      paths[key] = items[key];
    });

    console.log(paths)
    return (
      <Swagger
        docs={docs}
        paths={paths}
      />
    )
  }
}

export default SwaggerWrapper
