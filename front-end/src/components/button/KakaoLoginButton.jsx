import styled from "styled-components";
import kakaoImage from "../../assets/images/kakao_login_large_narrow.svg"

export default function KakaoLoginButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={kakaoImage} height={48} alt="kakao" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`