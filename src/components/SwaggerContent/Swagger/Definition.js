import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Link from './Link';

import classes from './Swagger.module.scss'

class Definition extends React.Component {
  render() {
    const {title, value, relatedObjects, onClick} = this.props

    const source =
      value.properties ?
        `${'```js'} ${JSON.stringify(value.properties, null, 4)}` :
        `${'```js'} ${JSON.stringify(value, null, 4)}`

    return (
      <div className={classes.definition}>
        <h3>{title}</h3>

        { value.required && <h4>Required</h4> }

        <span>{JSON.stringify(value.required)}</span>

        { value.properties && <h4 style={{marginTop: 25}}>Properties</h4> }

        <ReactMarkdown source={source} />

        { relatedObjects.length > 0 && <h4>Related objects</h4> }

        { relatedObjects.map( v => <Link key={v} to={v.split('/')[2]} onClick={onClick} /> ) }
      </div>
    )
  }
}

Definition.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  relatedObjects: PropTypes.array.isRequired
}

export default Definition
