import React, { useEffect } from "react";
import styled from "styled-components";

export default function MyFixPlanContentTagColorWrapper(props) {
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
    width: ${(props) => (props.selected ? "1.7vw" : "1.3vw")};
    height: ${(props) => (props.selected ? "1.7vw" : "1.3vw")};
    border-radius: 50%; // 항상 원형을 유지하기 위해 50%로 설정
    border: 1px solid black;
    background-color: ${(props) => props.tagcolor};
    margin: 0.7vw;
    @media (max-width: 1280px) {
        width: ${(props) => (props.selected ? "20px" : "16px")};
        height: ${(props) => (props.selected ? "20px" : "16px")};
        margin: 9px;
    }
`;
