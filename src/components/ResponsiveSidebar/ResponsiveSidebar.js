import React, { Component } from "react";
import SidebarContents from "../SidebarContents";

class ResponsiveSidebar extends Component {
  ref = React.createRef()

  componentDidUpdate = () => {
    const ref = this.ref.current
    ref.scrollTop = ref.scrollHeight - ref.clientHeight
  }

  render() {
    const { 
      root,
      slug,
      language
    } = this.props

    return (
      <div
        ref={this.ref}
        style={{
        position: "fixed",
        top: 60,
        left: 10,
        right: "80%",
        bottom: 50,
        overflow: "auto", 
      }} >
        <div style={{
          position:"absolute", 
          left:0,
          right:10,
          top:0,
          bottom:0
        }}>
          <SidebarContents root={root} slug={slug} language={language} />
        </div>
      </div>
    )
  }
}

export default ResponsiveSidebar;
