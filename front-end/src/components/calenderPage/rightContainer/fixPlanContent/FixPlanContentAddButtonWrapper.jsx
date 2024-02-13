import React from "react";
import styled from "styled-components";
import { FaCirclePlus } from "react-icons/fa6";

export default function MyFixPlanContentAddButtonWrapper(props) {
    return (
        <FixPlanContentAddButtonWrapper>
            <FixPlanContentAddButton onClick={() => props.addTagHandler()} />
        </FixPlanContentAddButtonWrapper>
    );
}

const FixPlanContentAddButtonWrapper = styled.div`
    width: 100%;
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        height: 38px;
    }
`;

const FixPlanContentAddButton = styled(FaCirclePlus)`
    width: auto;
    border-radius: 2vw;
    height: 2vw;
    color: #ffe7dd;
    background-color: #ff824c;
    @media (max-width: 1280px) {
        border-radius: 24px;
        height: 24px;
    }
`;
