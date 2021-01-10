/*
 * @Author: your name
 * @Date: 2021-01-05 23:06:47
 * @LastEditTime: 2021-01-08 21:48:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\pages\login\login.jsx
 */
import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import Logo from "../../assets/images/logo1.png"
import { saveUserInfo } from '../../utils/saveUserInfo'
import "./login.less"
import { reqLogin } from '../../api'
import { saveUser } from '../../utils/storageUtils'
// import { Components } from "antd/lib/date-picker/generatePicker"
const Item = Form.Item
const uRules = [
  {
    required: true,
    message: "请输入用户名"
  }
]
const pRules = [
  {
    required: true,
    pattern: /^[a-zA-Z0-9_]+$/,
    message: "密码必须是英文、数字或下划线组成"
  }
]
class Login extends Component {
  formRef = React.createRef()
  handleSubmit = async (values) => {
    let result = await reqLogin(values)
    if (result.status === 0) {
      const user = result.data
      saveUserInfo.user = user
      saveUser(user)
      message.success('登录成功')
      this.props.history.replace('/')
    } else if (result.status === 1) {
      message.error(result.msg)
    }
  }
  render () {
    const user = saveUserInfo.user
    if (user.user && saveUserInfo._id) {
      <Redirect to="/admin" />
    }
    return (
      <div className="login">
        <header className="login-header">
          <img src={Logo} alt="logo" /> <h1>React 项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h3>用户登陆</h3>
          <Form ref={this.formRef} onFinish={this.handleSubmit} className="login-form">
            <Item
              name="username"
              rules={uRules}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Item>
            <Item
              name="password"
              rules={pRules}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Item>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div >
    )
  }
}
// const highLogin = (WrappedComponent) => {
//   return class extends Component {
//     render () {
//       return <WrappedComponent />
//     }
//   }
// }
export default Login
