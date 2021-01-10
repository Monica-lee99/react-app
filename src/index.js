import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getUser } from './utils/storageUtils'
import { saveUserInfo } from './utils/saveUserInfo'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { ConfigProvider } from 'antd'
const user = getUser()
if (user && user._id) {
  saveUserInfo.user = user
}
ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>,

  document.getElementById('root')
);
