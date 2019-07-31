import React from 'react'

import classes from './LangBar.module.scss'

class LangBarItem extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.code)
  }

  render() {
    const {label, active} = this.props;

    if (active) {
      return <h4 className={classes.item} style={{color: '#6494ec'}} onClick={this.handleClick}>{label}</h4>
    }

    return <h5 className={classes.item} onClick={this.handleClick}>{label}</h5>

  }
}

export default LangBarItem
