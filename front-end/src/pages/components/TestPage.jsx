import styled from "styled-components";
import PotTagItem from "../../components/tag/PotTagItem";
import TodoTagItem from "../../components/tag/TodoTagItem";
import ScheduleTagItem from "../../components/tag/ScheduleTagItem";
import NewGardenBox from '../../components/gardenContent/NewGardenBox';
import PotCreate from "../../components/gardenContent/PotCreate";


export default function TestPage() {
    return (
        <Container>
            <PotCreate />
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    height: 566px;
    background-color: white;
    border-radius: 32px;
    border: 1px solid black;
`