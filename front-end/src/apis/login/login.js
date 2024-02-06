import { Server } from "../setting";
import axios from "axios";

/** 카카오 인가코드를 서버에 전송 */
export const getKakaoAccessToken = async () => {
    try {
        // TODO
        /** 카카오에서 토큰 받기 */
        /** main Server에 카카오 토큰 보내서 우리 토큰 받기 */
        const response = await Server.post("/members/token/test");
        const result = response.data.result;
        /** 발급받은 토큰을 localStorage에 저장 */
        localStorage.setItem("access", result.accessToken);
        localStorage.setItem("refresh", result.refreshToken);

        console.log("accessToken: " + localStorage.getItem("access"));
        console.log("refreshToken: " + localStorage.getItem("refresh"));
    } catch (error) {
        console.log(`getKakaoAccessToken 에러: ${error}`);
        // TODO
        /** 에러 시 토큰 재발급 */
        // if (error.response.status === 401) {
        //     const result = await getRefresh();
        //     console.log('에러시 재발급: ', result);
        //     if (result) {
        //         error.config.headers.Authorization = result.data.access_token;
        //         await Server.post(error.config.url, error.config);
        //     }
        // }
    }
};
