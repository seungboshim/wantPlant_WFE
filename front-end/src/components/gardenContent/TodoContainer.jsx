import styled from "styled-components";
import todoEmpty from "../../assets/images/todoEmpty.svg";
import todoFill from "../../assets/images/todoFill.svg";

/** 화분 정보 -> 투두 */
export default function TodoContainer() {
    return (
        <Container>
            투두입니다
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin: 10px;
    border: 1px solid black;
`