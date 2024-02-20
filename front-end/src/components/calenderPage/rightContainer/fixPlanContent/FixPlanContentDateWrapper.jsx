import React from "react";
import styled from "styled-components";

export default function MyFixPlanContentDateWrapper(props) {
    return (
        <FixPlanContentDateWrapper className="FixPlanContentDateWrapper">
            <DateBox>
                {(props.selectedSlot && props.selectedSlot.start instanceof Date
                    ? props.selectedSlot.start
                    : new Date()
                ).getMonth() + 1}
                <DateUnit>월</DateUnit>
            </DateBox>
            <DateBox>
                {(props.selectedSlot && props.selectedSlot.start instanceof Date
                    ? props.selectedSlot.start
                    : new Date()
                ).getDate()}
                <DateUnit>일</DateUnit>
            </DateBox>
        </FixPlanContentDateWrapper>
    );
}

const FixPlanContentDateWrapper = styled.div`
    width: 5.8vw;
    height: 2vw;
    box-shadow: 0px 0px 4px 0px gray;
    margin-left: 1vw;
    background-color: ${({ theme }) => theme.colors.pink02};
    border-radius: 0.7vw;
    font-size: 1.4vw;
    font-weight: 600;
    font-family: Pretendard;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        width: 74px;
        height: 25.6px;
        margin-left: 12.8px;
        border-radius: 9px;
        font-size: 18px;
    }
`;

const FixPlanContentTimeDataUnit = styled.div`
    height: auto;
    font-size: 1vw;
    @media (max-width: 1280px) {
        font-size: 12.8px;
    }
`;

const DateBox = styled.div`
    margin: 2px;
`;

const DateUnit = styled.span`
    display: inline-block;
    font-size: 0.9vw;
    @media (max-width: 1280px) {
        font-size: 11.5px;
    }
`;
