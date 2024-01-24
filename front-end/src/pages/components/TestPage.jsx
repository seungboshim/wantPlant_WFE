import styled from "styled-components";
import PotTagItem from "../../components/tag/PotTagItem";
import TodoTagItem from "../../components/tag/TodoTagItem";
import ScheduleTagItem from "../../components/tag/ScheduleTagItem";


export default function TestPage() {
    return (
        <Container>
            <PotTagItem color="potRed" label="화분1124124" />
            <PotTagItem color="potBlue" label="화분화분화분화분" />
            <PotTagItem color="potPurple" label="화분이이름이좀길다" />
            <PotTagItem color="potGreen" label="오픈소스개론" />
            <PotTagItem color="potPink" label="객체지향프로그래밍" />
            <PotTagItem color="potOrange" label="화분1" />
            <TodoTagItem todoNum={2} />
            <ScheduleTagItem color="tag01" label="1234567"/>
            <ScheduleTagItem color="tag02" label="할일할일할일"/>
            <ScheduleTagItem color="tag03" label="할일할일할일할일"/>
            <ScheduleTagItem color="tag04" label="할일12345678"/>
            <ScheduleTagItem color="tag05" label="할일할일할일"/>
            <ScheduleTagItem color="tag06" label="할일할일1235"/>
            <ScheduleTagItem color="tag07" label="abcdefghijklnmop"/>
            <ScheduleTagItem color="tag08" label="할일할일abcd"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`