import styled from "styled-components";
import GardenHeaderComponent from "./GardenHeaderComponent";

/** 정원 헤더 */
export default function GardernHeader() {
    return (
        <Wrapper>
            <GardenHeaderComponent label="공부" bgColor="green01" textColor="black"/>
            <GardenHeaderComponent label="취미" bgColor="green04" textColor="white"/>
            <GardenHeaderComponent label="운동" bgColor="green07" textColor="white"/>
            <GardenHeaderComponent label="캘린더" bgColor="pink01" textColor="black"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`