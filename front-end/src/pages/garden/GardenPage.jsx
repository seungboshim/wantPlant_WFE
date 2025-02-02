import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import GardenHeader from "../../components/gardenHeader/GardenHeader";
import EmptyPotItem from "../../components/gardenContent/EmptyPotItem";
import GardenDeleteButton from "../../components/button/GardenDeleteButton";
import PotPagenation from "../../components/pagenation/PotPagenation";
import Information from "../../components/gardenContent/Information";
import PotCreate from "../../components/gardenContent/PotCreate";
import PotItem from "../../components/gardenContent/PotItem";
import TodoView from "../../components/gardenContent/TodoView";
import GardenSecond from "./GardenSecond";

import EditGardenModal from "../../components/modal/EditGardenModal";
import AddTodoModal from "../../components/modal/AddTodoModal";
import EditTodoModal from "../../components/modal/EditTodoModal";

import { getGardenById } from "../../apis/garden/getGarden";
import { getPotsWithPage } from "../../apis/pot/getPot";
import { getPotById } from "../../apis/pot/getPot";
import { getGoalsByPotId } from '../../apis/goal/getGoal';
import { deleteGarden } from "../../apis/garden/editGarden";
import { getEntireGardens } from "../../apis/garden/getGarden";
import { postTodo } from "../../apis/todo/editTodo";

import { useRecoilState } from "recoil";
import { InitGardenAtom } from "../../recoil/atom";

export default function GardenPage() {
    // params = {gardenId: ***} 저장됨
    const params = useParams();
    const gardenId = params.gardenId;
    // console.log(gardenId)

    const navigate = useNavigate();

    const [gardenData, setGardenData] = useState({});
    const [potsData, setPotsData] = useState({});
    const [page, setPage] = useState(1);

    const [gardenPots, setGardenPots] = useState([]);
    const [listSize, setListSize] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    // const [remain, setRemain] = useState(0);
    // const [emptyPotSize, setEmptyPotSize] = useState(0);
    // const [emptyPots, setEmptyPots] = useState([]);

    const [selectedPotId, setSelectedPotId] = useState(0);
    const [selectedPotData, setSelectedPotData] = useState();

    useEffect(() => {
        getGardenById(gardenId).then((data) => {
            setGardenData(data);
            //console.log(data);
        })
        getPotsWithPage(gardenId, page).then((data) => {
            setPotsData(data);
            //console.log(data);

            const pots = data.pots;
            const listSize = data.listSize;
            const totalPage = data.totalPage;
            const totalElements = data.totalElements;

            setGardenPots(pots);
            setListSize(listSize);
            setTotalPage(totalPage);
            setTotalElements(totalElements);

            // const remain = totalElements % listSize;
            // console.log(remain)
            // const emptyPotSize = listSize - remain;
            // const emptyPots = Array.from({ length: emptyPotSize }, (_, index) => {
            //     <EmptyPotItem key={index}/>
            // });
    
            // setRemain(remain);
            // setEmptyPotSize(emptyPotSize);
            // setEmptyPots(emptyPots);

            if (data.pots.length !== 0) {
                const initPotId = data.pots[0].potId;
                console.log(initPotId)
                setSelectedPotId(initPotId);
            }
        })
    }, [gardenId, page])


    // useEffect(() => {
    //     console.log(gardenData);
    // }, [gardenData])

    // useEffect(() => {
    //     console.log(potsData);
    // }, [potsData])

    useEffect(() => {
        console.log(selectedPotId)
        if (selectedPotId !== 0) {
            getPotById(selectedPotId).then((data) => {
                setSelectedPotData(data);
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [selectedPotId])

    /** isChanged=false, selectedPotId=potId */
    const handleSelectPot = (potId) => {
        setIsChanged(false);
        setSelectedPotId(potId);
    }
  
    // 화분 추가를 위한 상태변수
    const [isChanged, setIsChanged] = useState(false);
  
    const handleOpenPotCreate = () => {
        setIsChanged(true);
    }

    const handleClosePotCreate = () => {
        if (gardenPots) {
            setSelectedPotId(gardenPots[0].potId);
            console.log(gardenPots[0].potId)
        }
        setIsChanged(false);
    }

    const handleClosePotCreateEmpty = () => {
        setIsChanged(false);
    }

    const [initGarden, setInitGarden] = useRecoilState(InitGardenAtom);
    const [entireGardens, setEntireGardens] = useState(0);

    const fetchEntireGardens = async() => {
        try {
            const garden = await getEntireGardens();
            setEntireGardens(garden);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (entireGardens) {
            const gardenIndex = entireGardens.gardens[0].gardenId;
            setInitGarden(gardenIndex);
            console.log(gardenIndex)
        }
    }, [entireGardens])

    /** 정원 삭제 */
    const handleDeleteGarden = () => {
        let makeSure = window.confirm(`정말 "${gardenData.name}" 정원을 삭제하시겠어요?`);
        if (makeSure) {
            deleteGarden(gardenId).then((result) => {
                console.log(result);
                alert(result);
                // // 새로 전체 정원 데이터 불러오고
                // fetchEntireGardens();
                // // initGarden 존재시 그곳으로 라우팅
                // if (initGarden) {
                //     navigate(`/garden/${initGarden}`);
                // } else {
                //     navigate(`/garden/add`);
                // }
                navigate(`/garden/add`);
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const handleAddTodo = (formData) => {
        console.log(formData);
        postTodo(formData).then((result) => {
            console.log(result);
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        })
    }

    // 모달 관련
    const [isEditGardenModalOpen, setIsEditGardenModalOpen] = useState(false);
    const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);
    const [isEditTodoModalOpen, setIsEditTodoModalOpen] = useState(false);

    const EditGardenModalHandler = (isOpen) => {
        setIsEditGardenModalOpen(isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    };

    const AddTodoModalHandler = (isOpen) => {
        setIsAddTodoModalOpen(isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    };
    const EditTodoModalHandler = (isOpen) => {
        setIsEditTodoModalOpen(isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    };

    if (gardenData !== undefined) {
        return (
            <Wrapper>
                {/** 정원 헤더 */}
                <GardenHeader category={gardenData.gardenCategory} />
    
                {/** $을 붙이는 이유 : transient props (배포시 문제 방지) */}
                <Content className="Content">
                    <ContentHeader className="ContentHeader">
                    <TextWrapper className="TextWrapper">
                        <GardenTitle className="GardenTitle">{gardenData.name}</GardenTitle>
                        <GardenDescription>{gardenData.description}</GardenDescription>
                    </TextWrapper>
                    <DeleteBtn>
                        <GardenDeleteButton label="정원 삭제하기" onClick={handleDeleteGarden}/>
                    </DeleteBtn>
                    </ContentHeader>
                    <ContentInner className="ContentInner">
                    <LeftContent className="LeftContent">
                        {/* {page > totalPage || totalElements === 0 ?
                            emptyPots.map((idx) => {
                                return (
                                    <EmptyPotItem key={idx} onClick={handleOpenPotCreate} />
                                )
                            })
                        : (gardenPots && gardenPots.map((pot, idx) => {
                            //console.log(pot)
                            const potIndex = idx + 1;
                            return (
                                <PotItem 
                                    key={potIndex}
                                    potName={pot.potName}
                                    startAt={pot.startAt}
                                    potTagColor={pot.potTagColor}
                                    proceed={pot.proceed}
                                    potImageUrl={pot.potImageUrl}
                                    selected={selectedPotId === pot.potId}
                                    onClick={() => handleSelectPot(pot.potId)}
                                />
                            )
                        }))
                        } */}
                        {(() => {
                            const currPots = gardenPots.length;
                            const emptyPotSize = listSize - currPots;
                            const emptyPots = Array.from({ length: emptyPotSize }, (_, index) => {
                                return <EmptyPotItem key={index} onClick={handleOpenPotCreate}/>
                            });

                            if (currPots === 0) {
                                return emptyPots;
                            } else {
                                return (
                                    <>
                                        {gardenPots && gardenPots.map((pot, idx) => {
                                            //console.log(pot)
                                            const potIndex = idx + 1;
                                            return (
                                                <PotItem 
                                                    key={potIndex}
                                                    potName={pot.potName}
                                                    startAt={pot.startAt}
                                                    potTagColor={pot.potTagColor}
                                                    proceed={pot.proceed}
                                                    potImageUrl={pot.potImageUrl}
                                                    selected={selectedPotId === pot.potId}
                                                    onClick={() => handleSelectPot(pot.potId)}
                                                />
                                            )
                                        })}
                                        {emptyPots}
                                    </>
                                );
                            }
                        })()}
                        <PotPagenation page={page} setPage={setPage} totalPage={totalPage} />
                    </LeftContent>
                    <RightContent className="RightContent">
                        {/* gardenPots 비어있으면 설명 컴포넌트 */}
                        {(totalElements === 0 || !totalElements) ? 
                            (isChanged ? (
                                <PotCreate gardenId={gardenId} handleClose={handleClosePotCreateEmpty}/>
                            ) : (
                                <Information />
                            )
                        ) : (isChanged ? (
                                <PotCreate gardenId={gardenId} handleClose={handleClosePotCreate}/>
                            ) : (
                                <TodoView 
                                    potId={selectedPotId}
                                    AddTodoModalHandler={AddTodoModalHandler}
                                    EditTodoModalHandler={EditTodoModalHandler}
                                    EditGardenModalHandler={EditGardenModalHandler}
                                />
                            )
                        )}
                        {/* 투두 추가 모달, 수정 모달 여는 함수 전달 */}
                    </RightContent>
                    </ContentInner>
                </Content>
                {/** 선택된 정원 외 다른 정원으로 */}
                <GardenSecond gardenId={params.gardenId} />
    
                {/** 모달 */}
                <EditGardenModal 
                    isOpen={isEditGardenModalOpen} 
                    EditGardenModalHandler={EditGardenModalHandler} 
                />
                <AddTodoModal 
                    isOpen={isAddTodoModalOpen}
                    AddTodoModalHandler={AddTodoModalHandler} 
                    onSubmit={handleAddTodo}
                />
                <EditTodoModal 
                    isOpen={isEditTodoModalOpen} 
                    EditTodoModalHandler={EditTodoModalHandler} 
                />
            </Wrapper>
        );
    } else {
        return (
            <span>loading...</span>
        )
    }

}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.green01};
    border-radius: 2.1vw;

    @media (max-width: 1280px) {
        border-radius: 20px;
    }
`;

const ContentHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    margin: 3.8% 0 0 4%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        margin: 40px 0 0 40px;
    }
`;

const GardenTitle = styled.span`
    font-size: 3.15vw;
    font-weight: 600;
    margin-bottom: 2.5%;

    @media (max-width: 1280px) {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 12px;
    }
`;

const GardenDescription = styled.span`
    font-size: 1.5vw;

    @media (max-width: 1280px) {
        font-size: 18px;
    }
`;

const DeleteBtn = styled.div`
    width: 10%;
    height: 15%;
    margin-top: 2%;
    margin-right: 3%;

    @media (max-width: 1280px) {
        width: 120px;
        height: 30px;
        padding: 5px;
    }
`;

const ContentInner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 46vw;
    margin: 3% 6% 6% 5.5%;

    @media (max-width: 1280px) {
        height: 566px;
        margin: 28px 56px 80px 56px;
    }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-right: 6%;
  justify-content: space-between;
  align-items: center;

    @media (max-width: 1280px) {
        width: 532px;
        margin-right: 60px;
    }
`;

const RightContent = styled.div`
    flex-grow: 1;
    background-color: white;
    border-radius: 32px;
    height: 100%;

    @media (max-width: 1280px) {
        width: 500px;
        border-radius: 32px;
    }
`;
