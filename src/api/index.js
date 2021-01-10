import request from './request'
// 登录接口
export const reqLogin = (data) => { request('/login', data) }