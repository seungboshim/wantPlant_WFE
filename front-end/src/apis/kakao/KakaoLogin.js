import { getKakaoAccessToken } from "../login/login";
import { useEffect } from "react";

const kakaoLogin = () => {
    getKakaoAccessToken();
};

export default kakaoLogin;
