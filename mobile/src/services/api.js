import axios from 'axios';

const api = axios.create({
    baseURL: 'https://megahackwomen.herokuapp.com'
})

export default api;