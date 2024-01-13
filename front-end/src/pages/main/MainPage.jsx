import styled from "styled-components";

export default function MainPage() {
    return (
        <Wrapper>
            <LoginWrapper>
                <Login>로그인</Login>
            </LoginWrapper>
            <LandingImage>랜딩이미지 들어갈곳</LandingImage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LoginWrapper = styled.div`
    display: flex;
    justify-content: end;
    font-size: 20px;
`

const Login = styled.button`
    padding: 4px;
    border: 1px solid black;
    border-radius: 4px;
`;

const LandingImage = styled.div`
    display: flex;
    justify-content: center;
`