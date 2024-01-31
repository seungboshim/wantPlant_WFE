import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import KakaoLoginButton from "../../components/button/KakaoLoginButton";
import socialLogin from "../../assets/images/socialLogin.svg"

/** 일반로그인 페이지 */
export default function LoginPage() {
    //const navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <img src={logo} width={50} alt="logo" />
                    <LogoTitle>하고심다 로그인 하기</LogoTitle>
                </LogoWrapper>
                <img src={socialLogin} width={500} alt="socialLogin" />
                <KakaoLoginButton />
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #eebfb0 20%,#8bb58f 80%);
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoTitle = styled.span`
    font-size: 32px;
    font-weight: 700;
    margin-left: 18px;
`