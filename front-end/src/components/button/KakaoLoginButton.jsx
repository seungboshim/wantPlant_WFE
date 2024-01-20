import styled from "styled-components";
import kakaoImage from "../../assets/images/kakao_login_large_narrow.svg"
import kakaoLogin from "../../apis/kakao/KakaoLogin";

/** 카카오 로그인 버튼 */
export default function KakaoLoginButton() {
    return (
        <Wrapper onClick={kakaoLogin}>
            <img src={kakaoImage} width={131} height={33} alt="kakao" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    margin-top: 25px;
`