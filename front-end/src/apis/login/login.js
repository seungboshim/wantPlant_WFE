import splitAuthCode from "../kakao/SplitAuthCode";

/** 카카오 인가코드를 서버에 전송 */
export const getKakaoAccessToken = async () => {
    const code = splitAuthCode();
    console.log(`kakao 인가코드: ${code}`);
    try {
        // TODO
        /** main Server에 인가코드 보내서 토큰 받기 */
        // const result = await Server.post('url', {code});
        // TODO : Server 객체에 우리 서버 정보 axios로 저장

        /** 발급받은 토큰을 localStorage에 저장 */
        // localStorage.setItem('access', result.data.access_token);
        // localStorage.setItem('refresh', result.data.refresh_token);
        // return result.data.user;
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