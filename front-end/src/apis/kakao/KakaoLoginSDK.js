<<<<<<< HEAD:front-end/src/apis/kakao/KakaoLoginSDK.js
import kakaoInit from "./KakaoInitSDK";
=======
import { getKakaoAccessToken } from "../login/login";
import { useEffect } from "react";
>>>>>>> 986ed53 (feat: todoList 뷰 & 더미 데이터로 임시 기능 구현):front-end/src/apis/kakao/KakaoLogin.js

const kakaoLogin = () => {
    getKakaoAccessToken();
};

export default kakaoLogin;
