import axios from "axios";

/** 우리 서버 API 객체 */
export const Server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 3000,
});
Server.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    // config.headers.Authorization = token ? `Bearer ${token}` : '';
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6OSwiaWF0IjoxNzA4MDA1NDM2LCJleHAiOjE3MDgwOTE4MzZ9.4aLpcBG5xd28VaF8JeIg_0DL6hqp7lG5qsvd1i-hNy4
`;

    return config;
});
