import styled from "styled-components";
import login from "../../assets/images/login.svg"

export default function AccessTermsButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={login} width = {210} height={50} alt="login" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    margin-top: 22px;
`