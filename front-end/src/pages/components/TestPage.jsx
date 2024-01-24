import styled from "styled-components";
import PotTagItem from "../../components/tag/PotTagItem";
import TodoTagItem from "../../components/tag/TodoTagItem";
import ScheduleTagItem from "../../components/tag/ScheduleTagItem";


export default function TestPage() {
    return (
        <Container>
            <PotTagItem color="potRed" label="화분1" />
            <PotTagItem color="potBlue" label="화분1" />
            <PotTagItem color="potPurple" label="화분1" />
            <PotTagItem color="potGreen" label="화분1" />
            <PotTagItem color="potPink" label="화분1" />
            <PotTagItem color="potOrange" label="화분1" />
            <TodoTagItem todoNum={2} />
            <ScheduleTagItem color="tag01" label="할일할일"/>
            <ScheduleTagItem color="tag02" label="할일할일할일"/>
            <ScheduleTagItem color="tag03" label="할일할일할일"/>
            <ScheduleTagItem color="tag04" label="할일할일"/>
            <ScheduleTagItem color="tag05" label="할일할일할일"/>
            <ScheduleTagItem color="tag06" label="할일할일"/>
            <ScheduleTagItem color="tag07" label="할일할일"/>
            <ScheduleTagItem color="tag08" label="할일할일"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`