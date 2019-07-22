import React from 'react'

import classes from './LangBar.module.scss'

class LangBarItem extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.code)
  }

  render() {
    const {label, active} = this.props;

    return active ? (
      <a
        onClick={this.handleClick}
        className={`${classes.item} ${classes.activeItem}`}
      >
        {label}
      </a>
    ) : (
      <a
        onClick={this.handleClick}
        className={classes.item}
      >
        {label}
      </a>
    )
  }
}

export default LangBarItem
