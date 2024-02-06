import React from "react";
import styled from "styled-components";
import Calender from "../Calender";

export default function MyLeftContainer(props) {
    return (
        <LeftContainer className="LeftContainer">
            <CalenderWrapper>
                <Calender
                    setSelectedSlot={props.setSelectedSlot}
                    tags={props.tags}
                    eventPropGetter={props.eventPropGetter}
                    onClickTag={props.deleteTagModalHandler}
                    isDeleteTagModalOn={props.isDeleteTagModalOn}
                />
            </CalenderWrapper>
        </LeftContainer>
    );
}

const LeftContainer = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CalenderWrapper = styled.div`
    width: 93%;
    height: 93%;
    margin: 1vw;
    background-color: white;
    @media (max-width: 1280px) {
        margin: 12.8px;
    }
`;
