import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getKakaoAccessToken } from '../../apis/login/login';

/** 카카오 로그인 성공시 리다이렉트될 때 호출 */
export default function KakaoAuthPage() {
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        if (location.search.includes('code')) {
            getKakaoAccessToken();
        }
    }, [location])

    return (
        <div>loading...</div>
    )
}