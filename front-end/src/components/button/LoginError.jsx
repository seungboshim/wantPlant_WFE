import styled from "styled-components";
import errorImage from "../../assets/images/login_error.svg"

export default function AccessTermsButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={errorImage} width = {240} height={50} alt="error" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    margin-top: 123px;
`