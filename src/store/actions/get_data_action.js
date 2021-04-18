import { getData } from '../../utils/api'
import {message} from "antd";
import {GETDATALIST} from "../actionTypes";

export const getData_action = () => {
  return async (dispatch) => {
    const {data:res} = await getData()
    if(res.meta.status!==200){
      message.error(res.meta.msg)
    }else{
      dispatch({
        type: GETDATALIST,
        payload: res.data,
      })
    }
  }
}

