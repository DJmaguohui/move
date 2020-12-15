import axios from 'axios'

const Server = axios.create({
    baseURL: "",
    timeout: 3000
})
Server.interceptors.request.use(config => {
    return config
})

Server.interceptors.response.use(response => {
    return response
})



export default Server