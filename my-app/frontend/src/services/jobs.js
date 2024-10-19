//import axios from 'axios'
import axios from '../util/apiClient'

const baseUrl = '/jobs'
//const baseUrl = '/api/jobs'

const getAll = () => {
  const returnedData = axios.get(baseUrl).then((response) => response.data)

  return returnedData
}


export default { getAll }
