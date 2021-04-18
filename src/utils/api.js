import axios from 'axios'
const baseUrl = 'http://localhost:10000/'
export const getData = () => {
  return axios.get(baseUrl + 'todolist')
}
