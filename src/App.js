import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import MyNavLink from "./components/layout";
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        {/* <MyNavLink to="/login" a={1}>登录</MyNavLink>
        <MyNavLink to="/admin" a={1}>管理</MyNavLink> */}
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Redirect to="/login"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
