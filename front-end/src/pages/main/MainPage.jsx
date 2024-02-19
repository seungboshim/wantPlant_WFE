import styled from "styled-components";
import JoinButton from "../../components/button/JoinButton";
import { useNavigate } from "react-router-dom";
import logoContainer from "../../assets/images/logoContainer.svg";
import LandingPhone from "../../assets/images/landingPhone.svg";
import LandingInform from "../../assets/images/landingInform.svg";
import LandingFirst from "../../assets/images/landingFirst.svg";
import LandingSecond from "../../assets/images/landingSecond.svg";
import LandingStar from "../../assets/images/landingStar.svg";
import StartButton from "./StartButton";
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
            <LandingImage>
                <First>
                    <ImgFirst src={LandingFirst}/>
                </First>
                <Second>
                    <ImgSecond src={LandingSecond}/>
                </Second>
                <Third>
                    <ImgPhone src={LandingPhone}/>
                    <ImgInform src={LandingInform}/>
                    <ImgStar src={LandingStar}/>
                    <StartButton/>
                </Third>
            </LandingImage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.green01};
    padding: 20px 0px;
    width: 100vw;
`

const LandingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
`

const LoginWrapper = styled.div`
    display: flex;
    width: 160px;
    justify-content: space-between;
`

const LandingImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const First = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ECF3E8;
`
const Second = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`
const Third = styled.div`
    position: relative;
    width: 100vw;
    height: 150vh;
    background: linear-gradient(180deg, white 0%,#87A78A 80%);
`
const ImgFirst = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    height: auto;
`
const ImgSecond = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    height: auto;
`
const ImgPhone = styled.img`
    position: absolute;
    margin-top: 15vw;
    margin-left: 10vw;
    width: 60vw;
    height: auto;
`
const ImgInform = styled.img`
    position: absolute;
    margin-top: 8vw;
    margin-left: 30vw;
    width: 52vw;
    height: auto;
`
const ImgStar = styled.img`
    position: absolute;
    margin-top: 9vw;
    margin-left: 69vw;
    width: 3vw;
    height: auto;
`
