import styled from "styled-components";
import kakaoImage from "../../assets/images/kakao_login_large_narrow.svg"
import kakaoLogin from "../../apis/auth/KakaoLogin";

export default function KakaoLoginButton() {
    return (
        <Wrapper onClick={kakaoLogin}>
            <img src={kakaoImage} height={48} alt="kakao" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`