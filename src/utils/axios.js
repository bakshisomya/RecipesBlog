import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://afternoon-refuge-85023.herokuapp.com/'
})

export default instance