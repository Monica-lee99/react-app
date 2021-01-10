import React, { Component } from 'react'
import { Card, Table, Button, Icon, message, Modal } from 'antd'
import './index.less'
import { tableData } from './data'
// import UpdateForm from './update-form'
// import AddForm from './AddForm'
import LinkButton from '../../components/link-button'
import MyIcon from '../../components/icon'
import { reqCategorys, reqAddCategory, reqUpdateCategory } from "../../api";
export default class Category extends Component {
  state = {
    categorys: [], // 一级分类列表 
    subCategorys: [], // 二级分类列表 
    parentId: '0', // 父分类的 ID 
    parentName: '', // 父分类的名称 
    loading: false, // 标识是否正在加载中 
    showStatus: 0, // 是否显示对话框 0: 都不显示, 1: 显示添加, 2: 显示更新 
  }
  componentWillMount () {
    this.columns = [
      { title: '分类名称', dataIndex: 'name', },
      {
        title: '操作',
        width: 300,
        render: (category) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(category)}>修改分类 </LinkButton>&nbsp;&nbsp;&nbsp;
            {
              this.state.parentId === '0' ? <LinkButton onClick={() => this.showSubCates(category)}>查看子分类</LinkButton> : null
            }
          </span>
        )
      }
    ];
  }
  // 修改分类后的回调
  updateCategory = () => {
    this.setState({ showStatus: 0 })
  }
  // 添加分类后的回调
  addCategory = () => {
    this.setState({ showStatus: 0 })
  }
  // 查看子分类
  showSubCates (category) {
    console.log(category)
  }
  // 修改分类
  showUpdate () {
    this.setState({ showStatus: 2 })
  }
  //  添加分类
  showAdd = () => {
    this.setState({ showStatus: 1 })
  }
  render () {
    // 从状态中取数据 
    const { categorys, subCategorys, parentId, parentName, loading, showStatus } = this.state // 从组件对象中数据 
    const category = this.category || {} // Card 的左侧标题
    const title = parentId === '0' ? '一级分类列表' : (
      <span>
        <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton> &nbsp;&nbsp;
        <MyIcon type='arrow-right' />&nbsp;&nbsp;
        <span>{parentName}</span>
      </span>
    )// Card 的右侧 button 
    const extra = (<Button type='primary' onClick={this.showAdd}> <MyIcon type='plus' /> 添加 </Button>)
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered rowKey='_id'
          // dataSource={parentId === '0' ? categorys : subCategorys}
          dataSource={parentId === '0' ? tableData : subCategorys}
          columns={this.columns}
          loading={loading}
          pagination={{ pageSize: 9, showQuickJumper: true, showSizeChanger: true }} />
        <Modal
          title="添加分类"
          visible={showStatus === 1}
          onOk={this.addCategory}
          onCancel={() => this.setState({ showStatus: 0 })} >
          {/* <AddForm categorys={categorys} parentId={parentId} setForm={form => this.form = form} /> */}
        </Modal>
        <Modal
          title="修改分类"
          visible={showStatus === 2}
          onOk={this.updateCategory}
          onCancel={() => {
            this.setState({ showStatus: 0 })
            // this.form.resetFields()
          }} >
          {/* <UpdateForm categoryName={category.name} setForm={form => this.form = form} /> */}
        </Modal>
      </Card>
    )
  }
}