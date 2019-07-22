import React, {Component} from 'react'

import Link from 'components/Link';

import {connect} from 'react-redux';

import Menu from '../Menu';
import {getMenuState} from '../../store/selectors';

class Header extends Component {
  render() {
    const {
      siteTitle,
      sidebarDocked,
      menuOpen,
      nMenuItem,
    } = this.props

    return (
      <div
        style={{
          width: "100%",
          height: (menuOpen && !sidebarDocked) ? nMenuItem * 32 + 55 : 55,
          background: 'cornflowerblue',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1360,
            whiteSpace: 'nowrap',
          }}
        >
          <div style={{float: 'left'}}>
            <h1 style={{fontSize: "1.25rem", margin: '15px 20px'}}>
              <Link
                to=""
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
          <Menu sidebarDocked={sidebarDocked}/>
        </div>
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

export default connect(mapStateToProps)(Header);
