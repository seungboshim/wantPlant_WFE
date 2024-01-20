import styled from "styled-components";
import on from "../../assets/images/auto_on.svg"
import off from "../../assets/images/auto_off.svg"

export default function CheckAuto({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={on} width = {40} height={20} alt="login" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`