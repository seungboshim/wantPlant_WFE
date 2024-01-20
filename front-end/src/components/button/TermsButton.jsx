import styled from "styled-components";
import termsImage from "../../assets/images/accessTerms.svg"

export default function AccessTermsButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={termsImage} width = {224} height={40} alt="terms" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    margin-top: 36px;
    border-radius:  30px;
`