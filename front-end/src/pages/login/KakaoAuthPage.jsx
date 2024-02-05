<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken, getKakaoAccessToken } from '../../apis/login/login';
=======
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getKakaoAccessToken } from '../../apis/login/login';
>>>>>>> b97aba3 (feat: 토큰 발급받기)
import splitAuthCode from '../../apis/kakao/SplitAuthCode';

/** 카카오 로그인 성공시 리다이렉트될 때 호출 */
export default function KakaoAuthPage() {
<<<<<<< HEAD
    const navigate = useNavigate();
    const authCode = splitAuthCode();
    const [kakaoToken, setKakaoToken] = useState("");

    useEffect(() => {
        const fetchKakaoToken = async() => {
            if (authCode) {
                const token = await getKakaoAccessToken(authCode);
                console.log("토큰: "+token)
                setKakaoToken(token);
            }
        }
        fetchKakaoToken();
    }, [authCode])

    useEffect(() => {
        if (kakaoToken) {
            getAccessToken(kakaoToken);
        }
    }, [kakaoToken])

    useEffect(() => {
        if (localStorage.getItem("access")) {
            navigate('/garden/study')
        }
    }, [localStorage.getItem("access")])
=======
    const authCode = splitAuthCode();

    if (authCode) {
        getKakaoAccessToken(authCode);
    }
>>>>>>> b97aba3 (feat: 토큰 발급받기)

    return (
        <div>loading...</div>
    )
}