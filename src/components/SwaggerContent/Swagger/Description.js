import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Description = ({value}) => {
  if (value.includes('```js')){
    return <ReactMarkdown source={value} />
  }

  return (
    <div>{value}</div>
  )
}

Description.propTypes = {
  value: PropTypes.string.isRequired
}

export default Description
