import styled from "styled-components";
import { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TodoCreateButton from "./TodoCreateButtonWrapped";
import GoalContainer from "./GoalContainer";
import TodoContainer from "./TodoContainer";
import { potsFromGarden } from "../../apis/dummy/pots";
import { goalsFromPotId } from "../../apis/dummy/goals";
import { getPotById } from "../../apis/pot/getPot";
import { getGoalsByPotId } from '../../apis/goal/getGoal';
import { postGoal } from "../../apis/goal/editGoal";
import GoalCreateButton from "./GoalCreateButton";
import green07Plus from "../../assets/images/green07Plus.svg"

/** potId 의 목표, 투두 조회 및 생성 컴포넌트 */
export default function TodoView({ potId, AddTodoModalHandler, EditTodoModalHandler, EditGardenModalHandler }) {
    const [potData, setPotData] = useState();
    const [goalData, setGoalData] = useState();

    useEffect(() => {
        console.log(potId)
        getPotById(potId).then((data)=> {
            console.log(data);
            setPotData(data);
        })
    }, [potId])

    useEffect(() => {
        if (potId) {
            getGoalsByPotId(potId).then((data) => {
                console.log(data);
                setGoalData(data);
            })
        }
    }, [potId])

    const [goalTitle, setGoalTitle] = useState("");
    const [isChanged, setIsChanged] = useState(false);

    const handleOpenGoalCreateInput = () => {
        setIsChanged(true);
    };

    /** 목표 생성 성공시 다시 goalData 불러옴 */
    const handleCloseGoalCreateInput = () => {
        console.log(goalTitle)
        if (goalTitle) {
            postGoal(potId, goalTitle)
                .then((result) => {
                    console.log(result);
                    getGoalsByPotId(potId).then((data) => {
                        console.log(data);
                        setGoalData(data);
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
            setIsChanged(false);
        } else {
            alert("목표를 입력해주세요.")
        }

    };

    const handleChange = (e) => {
        setGoalTitle(e.target.value);
    };

    if (potData && goalData) {
        return (   
            <Wrapper>
                <Container>
                    <TitleWrapper>
                        <PaddingDiv />
                        <GardenTitle color={potData.potTagColor}>{potData.potName}</GardenTitle>
                        <EditButton onClick={EditGardenModalHandler}/>
                    </TitleWrapper>
                    <ScrollWrapper>
                        <TodoWrapper>
                            {goalData.map((goals, idx) => {
                                return (
                                    <GoalContainer 
                                        key={idx}
                                        goalId={goals.goalId}
                                        goalTitle={goals.goalTitle}
                                        todoList={goals.todoList}
                                        AddTodoModalHandler={AddTodoModalHandler}
                                        EditTodoModalHandler={EditTodoModalHandler}
                                    />
                                )
                            })}
                            {/** GoalCreateButton 누르면 Input으로 변경 */}
                            {isChanged ? 
                                <GoalCreateContainer>
                                    <GoalTitleWrapper>
                                        <PlusWrapper src={green07Plus} width={20} alt="plus" />
                                        <GoalInput type="text" value={goalTitle} onChange={handleChange}/>
                                        <SubmitButton onClick={handleCloseGoalCreateInput}>확인</SubmitButton>
                                    </GoalTitleWrapper>
                                </GoalCreateContainer>
                                :
                                <GoalCreateButton onClick={handleOpenGoalCreateInput}/>
                            }
                        </TodoWrapper>
                    </ScrollWrapper>
                    {/* <AddTodoWrapper>
                        <TodoCreateButton AddTodoModalHandler={AddTodoModalHandler}/>
                    </AddTodoWrapper> */}
                </Container>
            </Wrapper>
        )
    } else {
        return (
            <span>loading...</span>
        )
    }

}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Container = styled.div`
    margin: 3vw 4vw;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1280px) {
        margin: 40px 52px;
    }
`

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GardenTitle = styled.span`
    padding: 0.6vw 1vw;
    background-color: ${({theme, color}) => theme.colors[color].bg};
    border-radius: 1vw;
    font-size: 2.4vw;
    font-weight: 500;
    @media (max-width: 1280px) {
        font-size: 32px;
        border-radius: 12px;
        padding: 8px 12px;
    }
`

const PaddingDiv = styled.div`
    height: 24px;
    width: 24px;
`

const EditButton = styled(HiOutlineDotsHorizontal)`
    height: 24px;
    width: 24px;
    cursor: pointer;
`

const ScrollWrapper = styled.div`
    width: 100%;
    height: -webkit-fill-available;
    margin: 2.4vw 0;
    overflow-y: auto;
    @media (max-width: 1280px) {
        margin: 30px 0;
    }
`

const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`

const AddTodoWrapper = styled.div`
    display: flex;
    width: 100%;
`

const GoalCreateContainer = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const PlusWrapper = styled.img`
    margin-right: 10px;
`

const GoalTitleWrapper = styled.form`
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: auto;
    border-left: 1px solid black;
    padding: 0px 15px;
    font-size: 18px;
`

const GoalInput = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 18px;
    border-bottom: 1px solid black;
    padding: 10px;
`

const SubmitButton = styled.div`
    font-size: 16px;
    padding-left: 10px;
`