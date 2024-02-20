import React, { useEffect } from "react";
import styled from "styled-components";

export default function MyFixPlanContentTagColorWrapper(props) {
    console.log(props.tagColors);
    return (
        <FixPlanContentTagColorWrapper>
            {props.tagColors &&
                props.tagColors.map((color, idx) => {
                    return idx === props.selectedTagColorNum ? (
                        <FixPlanContentTagColorCircleBtn
                            key={idx}
                            tagcolor={color}
                            onClick={(e) => {
                                props.setSelectedTagColor(e.currentTarget.getAttribute("tagcolor"));
                                props.setSelectedTagColorNum(idx);
                            }}
                            selected
                        />
                    ) : (
                        <FixPlanContentTagColorCircleBtn
                            key={idx}
                            tagcolor={color}
                            onClick={(e) => {
                                props.setSelectedTagColor(e.currentTarget.getAttribute("tagcolor"));
                                props.setSelectedTagColorNum(idx);
                            }}
                        />
                    );
                })}
        </FixPlanContentTagColorWrapper>
    );
}

const FixPlanContentTagColorWrapper = styled.div`
    width: 100%;
    height: 3vw;
    margin-top: 0.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        height: 38px;
        margin-top: 4px;
    }
`;

const FixPlanContentTagColorCircleBtn = styled.button`
    width: 1.3vw;
    height: 1.3vw;
    border-radius: 50%; // 항상 원형을 유지하기 위해 50%로 설정
    border: ${(props) => (props.selected ? "0.5px solid gray" : "0px")};
    box-shadow: ${(props) => (props.selected ? "0px 0px 3px 0px gray" : "0px")};;
    background-color: ${(props) => props.tagcolor};
    margin: 0.7vw;
    @media (max-width: 1280px) {
        width: 16px;
        height: 16px;
        margin: 9px;
    }


`;
