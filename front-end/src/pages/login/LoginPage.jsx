import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo_login.svg"
import LoginButton from "../../components/button/LoginButton";
import LoginError from "../../components/button/LoginError";
import AutoButton from "../../components/button/AutoButton";
import AutoCheck from "../../components/button/CheckAuto";

/** 일반로그인 페이지 */
export default function LoginPage() {
    //const navigate = useNavigate();

    return (
        <Wrapper>
            <LogoWrapper>
                <img src={logo} width={510} height={86} alt="logo" />
            </LogoWrapper>
            <LoginWrapper>
                <Input type="email"/>
                <Input type="password"/>
            </LoginWrapper>
            <AutoWrapper>
                <AutoCheck/>
                <AutoButton/>
            </AutoWrapper>
            <LoginButton/>
            <LoginError/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.green02};
    width: 1280px;
    height: 832px;
`
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
`

const Input = styled.input`
    display: flex;
    width: 700px;
    height: 70px;
`

const AutoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 132px;
    height: 21px;
    margin-top: 13px;
    margin-left: 576px;
    gap: 9px;
`

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 129px;
    gap:20px;
`