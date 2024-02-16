import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken, getKakaoAccessToken } from '../../apis/login/login';
import splitAuthCode from '../../apis/kakao/SplitAuthCode';
import { getEntireGardens } from '../../apis/garden/getGarden';

/** 카카오 로그인 성공시 리다이렉트될 때 호출 */
export default function KakaoAuthPage() {
    const navigate = useNavigate();
    const authCode = splitAuthCode();
    const [kakaoToken, setKakaoToken] = useState("");
    const [serverToken, setServerToken] = useState("");

    useEffect(() => {
        const fetchKakaoToken = async() => {
            if (authCode) {
                try {
                    const token = await getKakaoAccessToken(authCode);
                    setKakaoToken(token);
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchKakaoToken();
    }, [authCode])

    useEffect(() => {
        const fetchAccessToken = async() => {
            if (kakaoToken) {
                try {
                    const token = await getAccessToken(kakaoToken);
                    setServerToken(token);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchAccessToken();
    }, [kakaoToken])

    const [entireGardens, setEntireGardens] = useState(0);

    useEffect(() => {
        const fetchEntireGardens = async() => {
            try {
                const garden = await getEntireGardens();
                setEntireGardens(garden);
            } catch (error) {
                console.log(error);
            }
        }
        fetchEntireGardens();
    }, [serverToken])

    useEffect(() => {
        if (localStorage.getItem("access") && entireGardens.totalElements === 0) {
            navigate("/garden/add");
        } else if (localStorage.getItem("access")) {
            const gardenIndex = entireGardens.gardens[0].gardenId;
            console.log(gardenIndex)
            navigate(`/garden/${gardenIndex}`);
        }
    }, [kakaoToken, entireGardens])

    return (
        <div>loading...</div>
    )
}