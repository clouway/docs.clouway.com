import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {List, Button} from 'antd'
import { connect } from 'react-redux'
import { onChangeMenuState } from '../../actions/layout'
import { getMenuState } from '../../store/selectors';
import Link from 'components/Link'

class Menu extends Component {
  onChangeMenuState = (nItem) => {
    this.props.onChangeMenuState(nItem)
  }

  render() {
    const {
      sidebarDocked,
      menuOpen,
    } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            allMenuItems {
              edges {
                node {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.allMenuItems.edges.map(edge => edge.node)
          return (
            <div>
            {sidebarDocked &&
            <div>
              {menuItems.reverse().map(item => {
                return (
                  <div
                    style={{ marginLeft: "2em", float: "right" }}
                    key={menuItems.indexOf(item)}
                  >
                    <p style={{ margin:0, fontSize: "1rem" }}>
                      <Link
                        to={item.link}
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        {item.name}
                      </Link>
                    </p>
                  </div>
                )
              })}
            </div>
            }
            {!sidebarDocked &&
              <Button
                style={{
                  position: 'fixed',
                  right: 10,
                  top: 12,
                  color: 'white',
                }}
                type='link'
                onClick={() => {this.onChangeMenuState(menuItems.length)}}
                icon="menu"
              />
            }
            {menuOpen && !sidebarDocked &&
              <List
                itemLayout="horizontal"
                dataSource={menuItems}
                renderItem={item => (
                  <List.Item
                    style={{padding: '0 0 20px', listStyle: 'none'}}
                    key={menuItems.indexOf(item)}
                  >
                    <List.Item.Meta
                      title={
                        <Link
                          to={item.link}
                          style={{ color: 'white', textDecoration: 'none' }}
                          onClick={() => {this.onChangeMenuState(menuItems.length)}}
                        >
                          {item.name}
                        </Link>
                      }
                    />
                  </List.Item>
                )}
                style={{
                  width: '100%',
                  float: 'left',
                  paddingLeft: 20
                }}
              />
            }
            </div>
          )
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: getMenuState(state).open,
  }
}

const mapDispatchToProps = {
  onChangeMenuState,
}

// export default Menu
export default connect(mapStateToProps, mapDispatchToProps) (Menu)
