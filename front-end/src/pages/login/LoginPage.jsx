import styled from "styled-components";
import kakaoImage from "../../assets/images/kakao_login_large_narrow.svg"
import googleImage from "../../assets/images/web_neutral_sq_SU.svg"
import logo from "../../assets/images/logo.svg"
import cat from "../../assets/images/cat_ai.svg"
import dog from "../../assets/images/dog_ai.svg"

export default function LoginPage() {
    return (
        <Wrapper>
            <LeftFrame>
                <LeftWrapper>
                    <ImageWrapper>
                        <img src={cat} height={140} alt="cat" />
                        <img src={dog} height={152} alt="dog" />
                    </ImageWrapper>
                    <LeftTitle>하고심다에 오신 걸 환영해요!</LeftTitle>
                    <LeftText>계획도 세우고 일정도 관리했지만,<br/>꾸준히 이어지지 못했던 당신을 위해!</LeftText>
                    <LeftText>투두리스트와 일정 관리를 한 번에<br/>나의 목표 정원을 꾸미며 달성의 행복을 느껴보세요!</LeftText>
                </LeftWrapper>
            </LeftFrame>
            <RightFrame>
                <RightWrapper>
                    <img src={logo} height={120} alt="logo" />
                    <RightBorder />
                    <LoginWrapper>
                        <img src={kakaoImage} height={48} alt="kakao" />
                        <img src={googleImage} height={48} alt="google" />
                    </LoginWrapper>
                </RightWrapper>
            </RightFrame>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

const LeftFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.green05};
    width: 40%;
    height: 100%;
`

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const LeftTitle = styled.p`
    font-size: xx-large;
    font-weight: bold;
    color: white;
    margin: 80px 0;
`

const LeftText = styled.p`
    color: white;
`

const RightFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
`

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
`

const RightBorder = styled.div`
    width: 100%;
    border: 1px lightgray solid;
`

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
`