import styled from "styled-components";
import kakaoImage from "../../assets/images/kakao_login_large_narrow.svg"
import { Link } from "react-router-dom";
/** 카카오 로그인 버튼 */
export default function KakaoLoginButton() {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    return (
        <Link to={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`}>
            <Wrapper >
                <img src={kakaoImage} width={131} height={33} alt="kakao" />
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    margin-top: 25px;
`