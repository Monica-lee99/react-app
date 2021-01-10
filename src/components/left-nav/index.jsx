import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import MyIcon from '../icon'
import menuConfig from '../../config/menuConfig'
import logo from '../../assets/images/logo1.png'
import './index.less'
const SubMenu = Menu.SubMenu
class LeftNav extends Component {
  state = {
    menuNodes: []
  }
  getMenuNodes = (menuList) => { // 得到当前请求的 path 
    const path = this.props.location.pathname
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <MyIcon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      else { // 如果当前请求路由与当前菜单的某个子菜单的 key 匹配, 将菜单的 key 保存为 openKey 
        if (item.children.find(cItem => path.indexOf(cItem.key) === 0)) {
          this.openKey = item.key
        } return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <MyIcon type={item.icon} />
                <span>{item.title}</span>
              </span>
            } >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
  componentDidMount () { //
    this.menuNodes = this.getMenuNodes(menuConfig)
    this.setState({ menuNodes: this.menuNodes })
  }
  render () { // 得到当前请求路径, 作为选中菜单项的 key
    console.log(this.props.location.pathname)
    const selectKey = this.props.location.pathname
    const openKey = this.openKey
    return (
      <div className="left-nav">
        <Link to='/home' className='logo-link'> <img src={logo} alt="logo" />
          <h1>React后台</h1>
        </Link>
        <Menu mode="inline" theme="dark" selectedKeys={[selectKey]} defaultOpenKeys={[openKey]} > {this.menuNodes} </Menu>
      </div>
    )
  }
}
export default withRouter(LeftNav)