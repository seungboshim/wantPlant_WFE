import React from "react";
import styled from "styled-components";

export default function MyFixPlanContentTitleWrapper() {
    return (
        <FixPlanContentTitleWrapper className="FixPlanContentTitleWrapper">
            중요한 일정을 고정해보세요!
        </FixPlanContentTitleWrapper>
    );
}

const FixPlanContentTitleWrapper = styled.div`
    width: 100%;
    height: 1vw;
    margin: 1vw;
    font-size: 1vw;
    font-family: Pretendard;
    font-weight: 600;
    letter-spacing: 0;
    @media (max-width: 1280px) {
        height: 12.8px;
        margin: 12.8px;
        font-size: 12.8px;
    }
`;
