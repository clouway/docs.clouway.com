import React from 'react';
import PropTypes from 'prop-types';

import classes from './Swagger.module.scss'

class Link extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.to)
  }

  render () {
    return (
      <div onClick={this.handleClick} className={classes.link}>
        {this.props.to}
      </div>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
