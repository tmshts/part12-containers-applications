//import axios from 'axios'
import axios from '../util/apiClient'

const baseUrl = '/education'
//const baseUrl = '/api/education'

const getAll = () => {
  const returnedData = axios.get(baseUrl).then((response) => response.data)

  return returnedData
}


export default { getAll }
