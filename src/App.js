// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
// import { Button, message } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
class App extends Component {
  // constructor() {}
  // handleClick = () => {
  //   message.success("cd");
  // };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
