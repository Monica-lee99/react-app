import React, { Component } from 'react'
import './index.less' /*通用的看起来像链接的 button 组件 */
export default class LinkButton extends Component {
  render () {
    return <button {...this.props} className='link-button'></button>
  }
}