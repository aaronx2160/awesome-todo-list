import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List, Checkbox,Popconfirm, message } from 'antd'
import { getData_action } from '../../store/actions/get_data_action'
import {checkChange} from "../../utils/api";
import './DoneList.css'

class DoneList extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const { dataList } = this.props
    return (
      <div>
        <Card size="small" style={{ width: 500 }} className="done-list-card">
          <List
            header={<h3>Done List</h3>}
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

  listItem = (item) => {
    const Item =
      item.status === '1' ? (
        <List.Item className="list-item" key={item.id}>
          <div className="item-text">
            <Popconfirm
                title="Are you sure to mark this task as unfinished?"
                onConfirm={this.undoTask(item.id,item.status)}
                onCancel={()=>{return}}
                okText="Yes"
                cancelText="No">
              <Checkbox checked={item.status} />
            </Popconfirm>
            <span>{item.content}</span>
          </div>
        </List.Item>
      ) : null
    return Item
  }
  undoTask=(id,status)=>{
    return ()=>{
      console.log(id,status)
      checkChange(id,status).then(()=>{
        this.props.getData()
      })
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return { getData: () => dispatch(getData_action()) }
}
const mapStateToProps = (state) => {
  return { dataList: state.dataList }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneList)
