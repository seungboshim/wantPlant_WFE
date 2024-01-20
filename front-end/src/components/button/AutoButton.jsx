import styled from "styled-components";
import auto from "../../assets/images/autoText.svg"

export default function AutoButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={auto} width={83} height={21} alt="auto" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`