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
    width: 80%;
    height: 2.2vw;
    border-width: 0 0 1px;
    outline: none;
    margin: 1vw;
    //border-radius: 1vw;
    padding-left: 10px;
    text-align: center;
    @media (max-width: 1280px) {
        height: 28px;
        margin: 12.8px;
        //border-radius: 12.8px;
    }
`;
