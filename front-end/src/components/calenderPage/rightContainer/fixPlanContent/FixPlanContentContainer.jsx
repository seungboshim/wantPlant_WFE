import React from "react";
import styled from "styled-components";

import FixPlanContentTitleWrapper from "./FixPlanContentTitleWrapper";
import FixPlanContentDateWrapper from "./FixPlanContentDateWrapper";
import FixPlanContentTagNameInput from "./FixPlanContentTagNameInput";
import FixPlanContentTimeWrapper from "./FixPlanContentTimeWrapper";
import FixPlanContentTagColorWrapper from "./FixPlanContentTagColorWrapper";
import FixPlanContentAddButtonWrapper from "./FixPlanContentAddButtonWrapper";

export default function MyFixPlanContentContainer(props) {
    return (
        <FixPlanContentContainer className="FixPlanContentWrapper">
            <FixPlanContentTitleWrapper />
            <FixPlanContentDateWrapper selectedSlot={props.selectedSlot} />
            <FixPlanContentTagNameInput setTagName={props.setTagName} />
            <FixPlanContentTimeWrapper
                timeStartDate={props.timeStartDate}
                timeEndDate={props.timeEndDate}
                setTimeStartDate={props.setTimeStartDate}
                setTimeEndDate={props.setTimeEndDate}
            />
            <FixPlanContentTagColorWrapper
                tagColors={props.tagColors}
                setSelectedTagColor={props.setSelectedTagColor}
                setSelectedTagColorNum={props.setSelectedTagColorNum}
                selectedTagColorNum={props.selectedTagColorNum}
            />
            <FixPlanContentAddButtonWrapper addTagHandler={props.addTagHandler} />
        </FixPlanContentContainer>
    );
}

const FixPlanContentContainer = styled.div`
    width: 90%;
    height: 19vw;
    border: 1px solid black;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    @media (max-width: 1280px) {
        height: 242px;
        border-radius: 12.8px;
    }
`;
