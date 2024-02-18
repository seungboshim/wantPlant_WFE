import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken, getKakaoAccessToken } from '../../apis/login/login';
import splitAuthCode from '../../apis/kakao/SplitAuthCode';
import { getEntireGardens } from '../../apis/garden/getGarden';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { InitGardenAtom, IsLoggedInAtom } from '../../recoil/atom';

/** 카카오 로그인 성공시 리다이렉트될 때 호출 */
export default function KakaoAuthPage() {
    const navigate = useNavigate();
    const [authCode, setAuthCode] = useState("");
    const [kakaoToken, setKakaoToken] = useState("");
    const [serverToken, setServerToken] = useState("");
    const [initGarden, setInitGarden] = useRecoilState(InitGardenAtom);
    const setIsLoggedIn = useSetRecoilState(IsLoggedInAtom);

    useEffect(() => {
        const code = splitAuthCode();
        setAuthCode(code);
    }, [])

    useEffect(() => {
        if (!kakaoToken && authCode) {
            console.log("카카오 토큰 받아오기 실행")
            const fetchKakaoToken = async() => {
                if (authCode) {
                    try {
                        const token = await getKakaoAccessToken(authCode);
                        setKakaoToken(token);
                        setAuthCode("");
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
            fetchKakaoToken();
        }
    }, [authCode, kakaoToken])

    useEffect(() => {
        console.log("우리 토큰 받아오기 실행")
        const fetchAccessToken = async() => {
            if (kakaoToken) {
                try {
                    const token = await getAccessToken(kakaoToken);
                    setServerToken(token);
                    setIsLoggedIn(true);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchAccessToken();
    }, [kakaoToken])

    const [entireGardens, setEntireGardens] = useState(0);

    useEffect(() => {
        console.log("정원데이터 받아오기 실행")
        if (serverToken) {
            const fetchEntireGardens = async() => {
                try {
                    const garden = await getEntireGardens();
                    setEntireGardens(garden);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchEntireGardens();
        }
    }, [serverToken])

    useEffect(() => {
        console.log("정원데이터로 라우팅 실행")
        if (localStorage.getItem("access")) {
            navigate("/garden/add");
        } else {
            console.log("loading...")
        }
    }, [kakaoToken, entireGardens])

    return (
        <div>loading...</div>
    )
}