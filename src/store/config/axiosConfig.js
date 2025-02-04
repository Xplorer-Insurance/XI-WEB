import axios from 'axios';
import { baseUrl } from '../config/configs';

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
    config => {
        // Obtén el token de donde lo estés almacenando, por ejemplo, desde el localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
