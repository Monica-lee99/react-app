import React, { Component } from 'react'
import LinkButton from '../link-button'
import { withRouter } from 'react-router-dom'
import { removeUser } from '../../utils/storageUtils'
import { saveUserInfo } from '../../utils/saveUserInfo'
import { formateDate } from '../../utils/dateUtils'
import menuList from '../../config/menuConfig'
import { reqWeather } from '../../api'
import { Modal } from 'antd'
import './index.less'
class Header extends Component {
  state = {
    sysTime: formateDate(Date.now()),
    city: '', // 天气图片的 url
    wendu: ''
  }
  getWeather = async (city) => {
    const { wendu } = await reqWeather(city)
    // console.log(dayPictureUrl, weather)
    this.setState({ wendu, city })
  }
  getSysTime = () => {
    this.intervalId = setInterval(() => {
      this.setState({ sysTime: formateDate(Date.now()) })
    }, 1000)
  }
  async componentDidMount () {
    const city = window.returnCitySN.cname.split('省')[1].split('市')[0] || '深圳'
    this.getSysTime()
    this.getWeather(city)
  }
  componentWillUnmount () {
    clearInterval(this.intervalId)
  }
  getTitle = () => {
    // 得到当前请求路径
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if (item.key === path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
        title = item.title
      } else if (item.children) {
        // 在所有子item中查找匹配的
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
        // 如果有值才说明有匹配的
        if (cItem) {
          // 取出它的title
          title = cItem.title
        }
      }
    })
    return title
  }
  logout = () => {
    Modal.confirm({
      content: '确定退出吗?',
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        // 移除保存的 user 
        removeUser()
        saveUserInfo.user = {} // 跳转到 login 
        this.props.history.replace('/login')
      },
      onCancel () { console.log('Cancel') }
    })
  }
  render () {
    const { sysTime, city, wendu } = this.state
    const title = this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {saveUserInfo.user.username}</span>
          <LinkButton onClick={this.logout} >退出</LinkButton>
        </div> <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{sysTime}</span>
            <span>{city}</span >
            {/* <img src={dayPictureUrl} alt="weather" /> */}
            <span>{wendu}℃</span>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)