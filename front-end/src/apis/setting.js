import axios from "axios";

/** 우리 서버 API 객체 */
export const Server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 3000,
})