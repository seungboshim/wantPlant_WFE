import styled from "styled-components";

import React, { useState, useEffect, useCallback } from "react";

import TodoListContentContainer from "./todoListContent/TodoListContentContainer";
import FixPlanContentContainer from "./fixPlanContent/FixPlanContentContainer";

export default function CalenderPageRightContainer(props) {
    return (
        <RightContainer className="RightContainer">
            <RightWrapper className="RightWrapper">
                <TodoListContentContainer selectedSlot={props.selectedSlot} />
                <FixPlanContentContainer
                    selectedSlot={props.selectedSlot}
                    setTagName={props.setTagName}
                    timeStartDate={props.timeStartDate}
                    timeEndDate={props.timeEndDate}
                    setTimeStartDate={props.setTimeStartDate}
                    setTimeEndDate={props.setTimeEndDate}
                    selectedTagColorNum={props.selectedTagColorNum}
                    setSelectedTagColor={props.setSelectedTagColor}
                    setSelectedTagColorNum={props.setSelectedTagColorNum}
                    addTagHandler={props.addTagHandler}
                    tagColors={props.tagColors}
                />
            </RightWrapper>
        </RightContainer>
    );
}

const RightContainer = styled.div`
    width: 35%;
    height: 100%;
`;

const RightWrapper = styled.div`
    width: 93%;
    height: 93%;
    margin: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1280px) {
        margin: 12.8px;
    }
`;
