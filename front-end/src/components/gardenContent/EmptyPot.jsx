import styled from "styled-components";

export default function EmptyPot() {
    return (
        <Container>
            <Wrapper>
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