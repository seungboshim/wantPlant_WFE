import styled from "styled-components";
import mainLogo from "../../assets/images/mainLogo.svg"

/**헤더 하고심다 로고 */
export default function MainLogoButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={mainLogo} width = {84} height={28} alt="main" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`