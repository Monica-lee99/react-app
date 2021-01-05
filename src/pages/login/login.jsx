import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../assets/images/logo.png";
import "./login.scss";
const Item = Form.Item;
class Login extends Component {
  // constructor(){
  //   super()
  //   const [form] = Form.useForm();
  // }
  handSubmit = (e) => {
    e.preventDefault();
    console.log();
  };
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={Logo} alt="logo" /> <h1>React 项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h3>用户登陆</h3>
          <Form onSubmit={this.handSubmit} className="login-form">
            <Item>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Item>
            <Item>
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
    );
  }
}
// const WrapLogin = Form.create()(Login);
export default Login;
