import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

export default function MyFixPlanContentTimeWrapper(props) {
    return (
        <FixPlanContentTimeWrapper className="FixPlanContentTimeWrapper">
            <FixPlanContentTimeTextWrapper>시간을 입력해주세요.</FixPlanContentTimeTextWrapper>
            <FixPlanContentTimeBox className="FixPlanContentTimeBox">
                <FixPlanContentTimeData
                    selected={props.timeStartDate} // 현재 선택된 날짜
                    onChange={(date) => props.setTimeStartDate(date)} // 날짜가 변경되었을 때 실행되는 함수
                    selectsStart // DatePicker가 시작 날짜를 선택하는 데 사용되는 것임을 나타냅니다.
                    startDate={props.timeStartDate} // 범위 선택기에서 사용자가 선택할 수 있는 시작 날짜를 결정
                    endDate={props.timeEndDate} // 범위 선택기에서 사용자가 선택할 수 있는 종료 날짜를 결정
                    showTimeSelect // 사용자가 시간을 선택할 수 있도록 DatePicker에 시간 선택 옵션을 활성화
                    showTimeSelectOnly // 날짜를 선택하는 대신 시간만을 선택할 수 있게 하는 옵션
                    timeIntervals={10} // 사용자가 선택할 수 있는 시간 간격을 분 단위로 설정
                    timeCaption="Start Time" // 시간 선택 부분 옆에 표시되는 레이블
                    dateFormat="HH:mm" // 사용자에게 날짜와 시간을 어떻게 표시할지를 결정하는 포맷
                />
                <FixPlanContentTimeDataUnit>~</FixPlanContentTimeDataUnit>
                <FixPlanContentTimeData
                    selected={props.timeEndDate}
                    onChange={(date) => props.setTimeEndDate(date)}
                    selectsEnd
                    startDate={props.timeStartDate}
                    endDate={props.timeEndDate}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={10}
                    timeCaption="End Time"
                    dateFormat="HH:mm"
                />
            </FixPlanContentTimeBox>
        </FixPlanContentTimeWrapper>
    );
}

const FixPlanContentTimeWrapper = styled.div`
    width: 75%;
    height: 2.2vw;
    border: 1px solid black;
    margin-left: 1vw;
    border-radius: 1vw;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1280px) {
        height: 28px;
        margin-left: 12.8px;
        border-radius: 12.8px;
    }
`;

const FixPlanContentTimeBox = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    margin-left: auto;
`;

const FixPlanContentTimeTextWrapper = styled.div`
    width: 55%;
    height: 100%;
    font-size: 1vw;
    font-family: Pretendard;
    font-weight: 600;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        font-size: 12.8px;
    }
`;

const FixPlanContentTimeDataUnit = styled.div`
    height: auto;
    font-size: 1vw;
    @media (max-width: 1280px) {
        font-size: 12.8px;
    }
`;

const FixPlanContentTimeDataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FixPlanContentTimeData = styled(DatePicker)`
    width: 2.5vw;
    height: auto;
    text-align: center;
    font-size: 0.8vw;
    opacity: 0.5;
    border: none;
    @media (max-width: 1280px) {
        width: 32px;
        font-size: 11px;
    }
`;
