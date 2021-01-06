import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-python-portifolio.herokuapp.com/contato'
});

export default api;