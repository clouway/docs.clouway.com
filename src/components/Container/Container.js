import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuState } from '../../store/selectors';

class Container extends Component {
  render() {
    const {
      sidebarDocked,
      onPostPage,
      menuOpen,
      nMenuItem,
    } = this.props;

    return (
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: (!sidebarDocked && onPostPage) ? 30 : 0,
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps) (Container);
