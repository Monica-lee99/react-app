import React, { Component } from "react";
import { Redirect, Switch, Route } from 'react-router-dom'
import { saveUserInfo } from '../../utils/saveUserInfo'
import { Layout } from 'antd'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
// import store from 'store'
const { Footer, Sider, Content } = Layout
class Admin extends Component {
  render () {
    console.log(saveUserInfo)
    const user = saveUserInfo.user
    if (!user._id) {
      return <Redirect to="/login" />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ backgroundColor: 'white', margin: '20px 20px 0' }}>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/category' component={Category} />
              <Route path='/product' component={Product} />
              <Route path='/role' component={Role} />
              <Route path='/user' component={User} />
              <Route path='/charts/bar' component={Bar} />
              <Route path='/charts/line' component={Line} />
              <Route path='/charts/pie' component={Pie} />
              <Redirect to='/home' />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#aaaaaa' }}>推荐使用谷歌浏览器， 可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Admin;
