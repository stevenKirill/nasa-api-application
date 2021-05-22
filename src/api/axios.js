import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.nasa.gov'
});

export default axiosInstance;