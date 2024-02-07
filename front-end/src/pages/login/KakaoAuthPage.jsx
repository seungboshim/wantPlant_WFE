import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken, getKakaoAccessToken } from '../../apis/login/login';
import splitAuthCode from '../../apis/kakao/SplitAuthCode';

/** 카카오 로그인 성공시 리다이렉트될 때 호출 */
export default function KakaoAuthPage() {
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

    return (
        <div>loading...</div>
    )
}