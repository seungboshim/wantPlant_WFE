import React from "react";
import styled from "styled-components";

export default function MyFixPlanContentTagNameInput(props) {
    return (
        <FixPlanContentTagNameInput
            placeholder="태그 이름을 작성해주세요."
            onChange={(e) => props.setTagName(e.currentTarget.value)}
        />
    );
}

const FixPlanContentTagNameInput = styled.input`
    width: 65%;
    height: 2.2vw;
    border: 1px solid black;
    margin: 1vw;
    border-radius: 1vw;
    padding-left: 10px;
    @media (max-width: 1280px) {
        height: 28px;
        margin: 12.8px;
        border-radius: 12.8px;
    }
`;
