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
                <img src={logoContainer} height={100} alt="logo Container"/>
                <LoginWrapper>
                    <JoinButton label={'로그인'} onClick={() => navigate('/login')}/>
                    <JoinButton label={'회원가입'} onClick={() => navigate('/login')}/>
                </LoginWrapper>
            </LandingHeader>
            <LandingImage>
                <First>
                    <img src={LandingFirst} width={5000}/>
                </First>
                <Second>
                    <img src={LandingSecond} width={5000}/>
                </Second>
                <Third>
                    <img src={LandingPhone} width={"3400px"} style={{position: "absolute", top: "770px", left: "400px"}}/>
                    <img src={LandingInform} width={"3000px"} style={{position: "absolute", top: "350px", left: "2000px"}}/>
                    <img src={LandingStar} width={"200px"} style={{position: "absolute", top: "400px", left: "4250px"}}/>
                    <StartButton style={{position: "absolute", top: "4200px", left: "2000px"}}/>
                </Third>
            </LandingImage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.green01};
    padding: 40px 0px;
    width: 100%;
`

const LandingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
`

const LoginWrapper = styled.div`
    display: flex;
    width: 450px;
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
    height: 2100px;
    background: #ECF3E8;
`
const Second = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8500px;
    background-color: white;
`
const Third = styled.div`
    position: relative;
    height: 5000px;
    background: linear-gradient(180deg, white 0%,#87A78A 80%);
`