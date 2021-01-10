/*
 * @Author: your name
 * @Date: 2021-01-05 23:06:47
 * @LastEditTime: 2021-01-08 21:48:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\pages\login\login.jsx
 */
import React, { Component } from "react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import Logo from "../../assets/images/logo1.png"
import "./login.less"
import { reqLogin } from '../../api'
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
  handleSubmit = (values) => {
    console.log(values)
    reqLogin(values).then(res => console.log(res))
  }
  render () {
    console.log(this.props)
    return (
      <div className="login">
        <header className="login-header">
          <img src={Logo} alt="logo" /> <h1>React 项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h3>用户登陆</h3>
          <Form ref={this.formRef} onFinish={this.handleSubmit} className="login-form">
            <Item
              name="userName"
              rules={uRules}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Item>
            <Item
              name="passWord"
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
      </div>
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
