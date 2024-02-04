import kakaoInit from "./KakaoInitSDK";

/** 카카오 로그인시 호출되는 함수. /auth로 리다이렉트됨 */
const kakaoLogin = () => {
    const kakao = kakaoInit();
    kakao.Auth.authorize({
        redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
    })
};

export default kakaoLogin