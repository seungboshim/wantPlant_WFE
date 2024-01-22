import styled from "styled-components";
import question from "../../assets/images/question.svg"

/**헤더 도움말 버튼*/
export default function MainLogoButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={question} width = {20} height={20} alt="question" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`