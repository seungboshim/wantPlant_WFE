import styled from "styled-components";

/**헤더 사용자 이름 */
export default function WelcomeBox() {
    return (
        <Wrapper>
            <P>ㅇㅇ</P>
            <P>님, 반가워요!</P>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 216px;
    height: 32px;
`
const P = styled.p`
    color: ${({font}) => font.colors.green06};
    width: 120px;
    height: 12px;
`