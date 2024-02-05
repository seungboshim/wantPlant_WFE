import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getKakaoAccessToken } from '../../apis/login/login';
import splitAuthCode from '../../apis/kakao/SplitAuthCode';

/** 카카오 로그인 성공시 리다이렉트될 때 호출 */
export default function KakaoAuthPage() {
    const authCode = splitAuthCode();

    if (authCode) {
        getKakaoAccessToken(authCode);
    }

    return (
        <div>loading...</div>
    )
}