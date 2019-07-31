import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TableOfContents from '../TableOfContents';

class ResponsiveAnchor extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;

    return (
      <div style={{
        position: "fixed",
        top: 60,
        left: "85%",
        right: 10,
        bottom: 50,
        overflow: "auto",
      }} >
        <div style={{
          position: "absolute",
          left: 10,
          right: 0,
          top: 0,
          bottom: 0
        }}>
          <TableOfContents location={location} offsetTop={80} affix={true}/>
        </div>
      </div>
    )
  }
}

export default ResponsiveAnchor
