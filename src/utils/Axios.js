import axios from "axios"

const Axios = axios.create({
    baseURL: 'https://everythingmail.onrender.com',
    withCredentials: true,
})

export default Axios