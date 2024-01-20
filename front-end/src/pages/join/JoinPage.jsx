import styled from "styled-components";
import pot from "../../assets/images/logo_pot.svg"
import social from "../../assets/images/socialLogin.svg"
import AccessTermsButton from "../../components/button/TermsButton";
import KakaoLoginButton from "../../components/button/KakaoLoginButton";

export default function LoginPage() {
    return (
        <Wrapper>
            <PotWrapper>
                <img src={pot} width={96} height={118} alt="pot" />
            </PotWrapper>
            <JoinWrapper>
                <Input type="text" id="Id"/>
                <Input type="tel" id="Tel"/>
                <Input type="email" id="Email"/>
                <Input type="password" id="Password"/>
                <Input type="password" id="Check"/>
            </JoinWrapper>
            <AccessTermsButton/>
            <SocialWrapper>
                <img src={social} width={441} height={23} alt="social"/>
            </SocialWrapper>
            <KakaoLoginButton/>
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

const PotWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 67px;
`

const JoinWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 520px;
    height: 350px;
    gap: 20px;
`
const Input = styled.input`
    display: flex;
    width: 520px;
    height: 54px;
    border: 1px solid #E8E8E8;
`

const SocialWrapper = styled.div`
    display: flex;
    margin-top: 34px;
`
