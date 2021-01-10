import { NavLink } from "react-router-dom";
import React from 'react'
class MyNavLink extends React.Component {
  render () {
    return <NavLink activeClassName="active" {...this.props}></NavLink>
  }
}
export default MyNavLink