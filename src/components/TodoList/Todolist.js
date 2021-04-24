import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Todolist.css'
import {getData_action} from "../../store/actions/get_data_action";
import {checkChange, addNewTask,deleteTask} from "../../utils/api";
import { Button, Input, Card, List, Checkbox, Popconfirm, message } from 'antd'


class Todolist extends Component {
  constructor() {
    super()
    this.state = {
      inputVal: '',
      loading: true,
    }
  }
  render() {
    const {dataList} = this.props
    return (
      <div>
        <Card size="small" style={{ width: 500 }} className="card">
          <Input
            placeholder="请输入你的任务名称，按回车键确认"
            onChange={this.handleInputChange}
            onPressEnter={this.handleInputEnterKey}
            value={this.state.inputVal}
          />
          <List
            className="list"
            size="small"
            bordered
            dataSource={dataList}
            renderItem={this.listItem}
            loading={this.loading}
          />
        </Card>
      </div>
    )
  }
  componentDidMount() {
    this.props.getData()
  }
  listItem = (item) => {
    const Item =
      item.status === '0' ? (
        <List.Item
          className="list-item"
          key={item.id}
          onMouseOver={this.listItemOnMouseOver(item.id)}
          onMouseLeave={this.listItemOnMouseLeave(item.id)}
        >
          <div className="item-text">
            <Checkbox onChange={this.handleChkChange(item.id,item.status)} />
            <span>{item.content}</span>
          </div>

          {item.isActive ? (
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={this.handleDeleteItem(item.id)}
              onCancel={() => {
                message.error('取消删除')
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button danger size="small">
                删除
              </Button>
            </Popconfirm>
          ) : null}
        </List.Item>
      ) : null
    return Item
  }
  listItemOnMouseOver = (id) => {
    const {dataList} = this.props
    return () => {
      dataList.map((item) => (item.isActive = item.id === id))
      this.setState({})
    }
  }
  listItemOnMouseLeave = (id) => {
    const {dataList} = this.props
    return () => {
      dataList.map((item) => (item.isActive = !item.id === id))
      this.setState({})
    }
  }
  handleInputChange = (e) => {
    this.setState({ inputVal: e.target.value })
  }
  handleInputEnterKey = () => {
    const inputVal = this.state.inputVal.trim()
    if(!inputVal) return
    addNewTask(inputVal).then(()=>{
      this.props.getData()
      this.setState({inputVal:''})
    })
  }
  handleChkChange = (id,status) => {
    return () => {
      checkChange(id,status).then(()=>{
        this.props.getData()
      })
    }
  }
  handleDeleteItem = (id) => {
    return () => {
      deleteTask(id).then((res)=>{
        const { meta } = res.data
        if (meta.status === 200) {
          message.success(meta.msg)
          this.props.getData()
        }
      })
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getData: () => dispatch(getData_action()) }
}

 const mapStateToProps=(state)=>{
return {dataList:state.dataList}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
