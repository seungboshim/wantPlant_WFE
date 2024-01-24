import styled from "styled-components";
import AutoButton from "../../components/button/AutoButton";

export default function TestPage() {
    return (
        <Container>
            <AutoButton />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`