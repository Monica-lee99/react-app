import request from './request'
import jsonp from 'jsonp'
// 登录接口
export const reqLogin = (data) => request('/login', data, "POST")
// 获取一级分类或二级分类列表
export const reqCategorys = (parentId) => request('/manage/category/list', { parentId })
// 添加分类
export const reqAddCategory = (parentId, categoryName) => request('/manage/category/add', { parentId, categoryName }, 'POST')
// 更新品类名称
export const reqUpdateCategory = ({ categoryId, categoryName }) => request('/manage/category/update', { categoryId, categoryName }, 'POST')
// 获取天气接口
export const reqWeather = (city) => {
  const url = `http://wthrcdn.etouch.cn/weather_mini?city=${city}`
  return new Promise((resolve, reject) => {
    jsonp(url, { param: 'callback' }, (error, response) => {
      console.log(response)
      if (!error && response.status === 1000) {
        const { wendu } = response.data
        resolve({ wendu })
      } else {
        alert('获取天气信息失败')
      }
    })
  })
}