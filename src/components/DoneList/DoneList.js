import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, List, Checkbox } from 'antd'
import { getData_action } from '../../store/actions/get_data_action'
import './DoneList.css'

class DoneList extends Component {
  constructor() {
    super()
    this.baseUrl = 'http://localhost:10000/'
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
            <Checkbox onChange={this.handleChkChange(item.id)} />
            <span>{item.content}</span>
          </div>
        </List.Item>
      ) : null
    return Item
  }

  handleChkChange = (id) => {
    return () => {
      console.log(id)
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
