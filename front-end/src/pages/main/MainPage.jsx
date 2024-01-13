import styled from "styled-components";
import JoinButton from "../../components/button/JoinButton";
import { useNavigate } from "react-router-dom";
import logoContainer from "../../assets/images/logoContainer.svg"

export default function MainPage() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <LandingHeader>
                <img src={logoContainer} height={28} alt="logo Container"/>
                <LoginWrapper>
                    <JoinButton label={'로그인'} onClick={() => navigate('/login')}/>
                    <JoinButton label={'회원가입'} onClick={() => navigate('/login')}/>
                </LoginWrapper>
            </LandingHeader>
            <LandingImage>랜딩이미지 들어갈곳</LandingImage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.green01};
    padding: 40px 0px;
`

const LandingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
`

const LoginWrapper = styled.div`
    display: flex;
    width: 236px;
    justify-content: space-between;
`

const LandingImage = styled.div`
    display: flex;
    justify-content: center;
`