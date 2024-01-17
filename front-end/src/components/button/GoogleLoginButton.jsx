import styled from "styled-components";
import googleImage from "../../assets/images/web_neutral_sq_SU.svg"

export default function GoogleLoginButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={googleImage} height={48} alt="google" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`