import styled from "styled-components";
import GardenHeaderComponent from "./GardenHeaderComponent";
import CalendarHeaderComponent from "./CalendarHeaderComponent";

export default function CalendarHeader() {
    return (
        <Wrapper>
            <GardenHeaderComponent label="공부" bgColor="green04" textColor="white" />
            <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
            <GardenHeaderComponent label="운동" bgColor="green04" textColor="white" />
            <CalendarHeaderComponent selected />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: end;

    @media (max-width: 1280px) {
        height: 40px;
    }
`;
