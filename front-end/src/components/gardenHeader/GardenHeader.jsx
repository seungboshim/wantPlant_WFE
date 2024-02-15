import styled from "styled-components";
import GardenHeaderComponent from "./GardenHeaderComponent";
import CalendarHeaderComponent from "./CalendarHeaderComponent";

/** 정원 헤더 (카테고리를 인자로 받음) */
export default function GardenHeader({ category }) {
    // 카테고리에 따라서 컴포넌트 모양 변화
    if (category === "STUDY") {
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green01" textColor="black" selected />
                <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="운동" bgColor="green04" textColor="white" />
                <CalendarHeaderComponent />
            </Wrapper>
        );
    } else if (category === "HOBBY") {
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="취미" bgColor="green01" textColor="black" selected />
                <GardenHeaderComponent label="운동" bgColor="green04" textColor="white" />
                <CalendarHeaderComponent />
            </Wrapper>
        );
    } else if (category === "EXERCISE") {
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="운동" bgColor="green01" textColor="black" selected />
                <CalendarHeaderComponent />
            </Wrapper>
        );
    } else
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="운동" bgColor="green04" textColor="white" />
                <CalendarHeaderComponent selected />
            </Wrapper>
        );
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: end;

    @media (max-width: 1280px) {
        height: 40px;
    }
`;
