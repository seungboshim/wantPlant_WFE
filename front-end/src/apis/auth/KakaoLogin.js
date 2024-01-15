import kakaoInit from "./KakaoInit";

const kakaoLogin = async () => {
    try {
        const kakao = kakaoInit();
        if (kakao) {
            await kakao.Auth.authorize({
                redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
            })
        } else {
            console.error("kakao init error");
        }
    } catch (error) {
        console.error(error);
    }
}

export default kakaoLogin;