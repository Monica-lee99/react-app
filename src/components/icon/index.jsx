import {
  HomeOutlined,
  AppstoreOutlined,
  BarsOutlined,
  ToolOutlined,
  UserOutlined,
  RobotOutlined,
  RadarChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
  FrownOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import React, { Component } from 'react'
export default class MyIcon extends Component {
  render () {
    const type = this.props.type
    switch (type) {
      case 'home':
        return <HomeOutlined />
      case 'appstore':
        return <AppstoreOutlined />
      case 'bars':
        return <BarsOutlined />
      case 'tool':
        return <ToolOutlined />
      case 'user':
        return <UserOutlined />
      case 'safety':
        return <RobotOutlined />
      case 'area-chart':
        return <RadarChartOutlined />
      case 'bar-chart':
        return <BarChartOutlined />
      case 'line-chart':
        return <LineChartOutlined />
      case 'pie-chart':
        return <PieChartOutlined />
      case 'arrow-right':
        return <PlusCircleOutlined />
      case 'plus':
        return <PlusCircleOutlined />
      default:
        return <FrownOutlined />
    }
  }
}