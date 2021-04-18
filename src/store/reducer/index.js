import {GETDATALIST} from "../actionTypes";

const initState = {
  dataList: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GETDATALIST:
      return {dataList:action.payload}
    default:
      return state
  }
}
export default reducer
