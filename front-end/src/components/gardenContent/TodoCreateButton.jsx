import styled from "styled-components"
import green05Plus from "../../assets/images/green05Plus.svg"
import { useRecoilState } from "recoil"
import { CurrGoalIdAtom } from "../../recoil/atom"
import { useEffect } from "react";

/** 투두 추가 버튼, 클릭시 모달 오픈 */
export default function TodoCreateButton({ AddTodoModalHandler, goalId }) {
    const [currGoalId, setCurrGoalId] = useRecoilState(CurrGoalIdAtom);

    const handleSetGoal = () => {
        setCurrGoalId(goalId);
    }

    const handleClick = () => {
        AddTodoModalHandler(true);
        handleSetGoal();
    }

    useEffect(()=> {
        console.log(currGoalId)
    }, [currGoalId])

    return (
        <Container onClick={handleClick} >
            <TodoTitleWrapper>
                <PlusWrapper src={green05Plus} width={16} alt="plus" />
                할 일 추가하기
            </TodoTitleWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin: 10px 20px;
    cursor: pointer;
`

const PlusWrapper = styled.img`
    margin-right: 10px;
`

const TodoTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    height: auto;
    opacity: 0.5;
    transition: opacity 0.25s;

    ${Container}:hover & {
        opacity: 1;
    }
`