import styled from "styled-components";

/** 빈 화분 */
export default function EmptyPot() {
    return (
        <Container>
            <Wrapper>
                {/** TODO : 아이콘 넣기, onClick으로 새 화분 추가 */}
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    border: 1px dashed black;
    border-radius: 32px;
`

const Wrapper = styled.div`
    display: flex;
    margin: 20px;
    width: 100%;
`