import axios from "axios";

/** 우리 서버 API 객체 */
export const Server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 15000,
})

Server.interceptors.request.use((config) => {
    const token = localStorage.getItem('access');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    
    return config;
});