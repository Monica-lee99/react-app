import store from 'store'
const USER_KEY = 'user_key'
// 保存用户信息
export const saveUser = (user) => store.set(USER_KEY, user)
// 获取用户信息
export const getUser = () => store.get(USER_KEY) || {}
// 删除用户信息
export const removeUser = () => store.remove(USER_KEY)
