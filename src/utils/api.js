import axios from 'axios'
const baseUrl = 'http://localhost:10000/'
export const getData = () => {
  return axios.get(baseUrl + 'todolist')
}

export const checkChange =(id,status)=>{
  return   axios.put(baseUrl + 'status', { id,status })
}

export const addNewTask =(inputVal)=>{
  return  axios
      .post(baseUrl + 'todolist', { content: inputVal })
}

export  const deleteTask =(id)=>{
  return axios.delete(baseUrl + 'todolist/' + id)
}
