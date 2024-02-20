import axios from "axios";

/** 우리 서버 API 객체 */
export const Server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 3000,
});

Server.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    // config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6OSwiaWF0IjoxNzA4MzM4MDY1LCJleHAiOjE3MDg0MjQ0NjV9.UKLDIdXxB08UxVOT-n8CcR2BTcwrBB1El8_x8Qsmy8c
    // `;

    return config;
});
