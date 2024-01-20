import styled from "styled-components";
import GardenHeaderComponent from "./GardenHeaderComponent";
import CalendarHeaderComponent from "./CalendarHeaderComponent";

/** 정원 헤더 (카테고리를 인자로 받음) */
export default function GardernHeader({ category }) {
    // 카테고리에 따라서 컴포넌트 모양 변화
    if (category === "study") {
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green01" textColor="black" selected />
                <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="운동" bgColor="green07" textColor="white" />
                <CalendarHeaderComponent />
            </Wrapper>
        )
    } else if (category === "hobby") {
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green01" textColor="black" />
                <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" selected />
                <GardenHeaderComponent label="운동" bgColor="green07" textColor="white" />
                <CalendarHeaderComponent />
            </Wrapper>
        )
    } else if (category === "exercise") {
        return (
            <Wrapper>
                <GardenHeaderComponent label="공부" bgColor="green01" textColor="black" />
                <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
                <GardenHeaderComponent label="운동" bgColor="green07" textColor="white" selected />
                <CalendarHeaderComponent />
            </Wrapper>
        )
    } else return (
        <Wrapper>
            <GardenHeaderComponent label="공부" bgColor="green01" textColor="black" />
            <GardenHeaderComponent label="취미" bgColor="green04" textColor="white" />
            <GardenHeaderComponent label="운동" bgColor="green07" textColor="white" />
            <CalendarHeaderComponent selected />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 40px;
    align-items: end;
`