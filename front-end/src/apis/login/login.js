import splitAuthCode from "../kakao/SplitAuthCode";
import { Server } from "../setting";
import axios from "axios";
import { useState } from "react";

/** 카카오 인가코드를 받아 토큰 생성 */
export const getKakaoAccessToken = async (code) => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    console.log("getkakaotoken 실행")
    try {
        // TODO
        /** 카카오에서 토큰 받기 */
        console.log("인가코드: "+code);

        const response = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                },
            },
        );

        const kakaoToken = response.data.access_token;
        console.log("토큰: "+kakaoToken)
        // /** main Server에 카카오 토큰 보내서 우리 토큰 받기 */
        // const response = await Server.post('/members/token/test');
        // const result = response.data.result;
        // /** 발급받은 토큰을 localStorage에 저장 */
        // localStorage.setItem('access', result.accessToken);
        // localStorage.setItem('refresh', result.refreshToken);

        // console.log("accessToken: "+localStorage.getItem('access'))
        // console.log("refreshToken: "+localStorage.getItem('refresh'))

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
}

/** 만료된 토큰 갱신 */
// export const getRefresh = async () => {
//     const accessToken = localStorage.getItem('access');
//     const refreshToken = localStorage.getItem('refresh');
//     const headers = { Authorization: `Bearer ${accessToken}` };
//     // 현재 localStorage의 토큰값과 Bearer auth 헤더를 저장
    
//     // main Server에 토큰과 헤더를 POST
//     try {
//         return await Server.post('/auth/refresh',
//             { refresh_token: refreshToken },
//             { headers }
//         );
//     } catch (error) {
//         console.log('액세스 토큰 갱신 실패: ', error);
//     }
// };

/** 로그아웃 */
// export const logout = async () => {
//     const refreshToken = localStorage.getItem('refresh');
//     try {
//         localStorage.clear();
//         return await Server.post('/auth/logout', {
//             refresh_token: refreshToken
//         });
//     } catch (error) {
//         console.log('로그아웃 에러:', error);
//     }
// };