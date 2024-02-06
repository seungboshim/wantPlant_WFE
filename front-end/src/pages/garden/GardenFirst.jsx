import styled from "styled-components";
import GardernHeader from "../../components/gardenHeader/GardenHeader";
import GardenDeleteButton from "../../components/button/GardenDeleteButton";
import PotItem from "../../components/gardenContent/PotItem";
import EmptyPotItem from "../../components/gardenContent/EmptyPotItem";
import Information from "../../components/gardenContent/Information";
import { useLocation } from "react-router-dom";
import PotCreate from "../../components/gardenContent/PotCreate";
import TodoView from "../../components/gardenContent/TodoView";
import { gardensFromId } from "../../apis/dummy/gardens";
import { potsFromGarden } from "../../apis/dummy/pots";
import { useEffect, useState } from "react";
import PotPagenation from "../../components/pagenation/PotPagenation";

/** 정원페이지 상단 컴포넌트 */
export default function GardenFirst({
  EditGardenModalHandler,
  AddTodoModalHandler,
  EditTodoModalHandler,
}) {
  const location = useLocation();
  // location = "/garden/{카테고리}"
  const pathname = location.pathname.split("/");
  // pathname = ["", "garden", "{카테고리}"] 저장됨
  const category = pathname[2].toUpperCase();
  // category = "STUDY" 저장
  const gardenId = pathname[3];
  const [page, setPage] = useState(1);
  // TODO : getGardenWithPagenation(gardenId, page) 로 정원 정보 받아오기
  
  // 해당 정원의 모든 화분 배열
  // TODO : potsFromGarden(gardenId)
  const gardenPots = potsFromGarden.pots

  // TODO : 페이지네이션 용 데이터도 가져오기 (이떈 useState로 저장)
  const listSize = potsFromGarden.listSize;
  const totalPage = potsFromGarden.totalPage;
  const totalElements = potsFromGarden.totalElements;
  const isFirst = potsFromGarden.isFirst;

  const remain = totalElements % listSize;
  const emptyPotSize = listSize - remain;

  const emptyPots = Array.from({ length: emptyPotSize }, (_, index) => {
    <EmptyPotItem key={index}/>
  });

  const [selectedPotId, setSelectedPotId] = useState(1);

  /** isChanged=false, selectedPotId=potId */
  const handleSelectPot = (potId) => {
    setIsChanged(false);
    setSelectedPotId(potId);
  }

  useEffect(() => {
    // TODO : page 바뀔때마다 getGarden.. 이놈 가져와서 데이터 다시 갱신
  }, page)

  useEffect(() => {
    console.log(selectedPotId)
  }, [selectedPotId])

  // 화분 추가를 위한 상태변수
  const [isChanged, setIsChanged] = useState(false);

  const handleOpenPotCreate = () => {
    setIsChanged(true);
  }

  // 카테고리에 따라 다른 컴포넌트 및 색상
  return (
    <Wrapper className="GardenFirstPage_Wrapper">
      <GardernHeader category={category} />
      {/** $을 붙이는 이유 : transient props (배포시 문제 방지) */}
      <Content $category={category} className="Content">
        <ContentHeader className="ContentHeader">
          <TextWrapper $category={category} className="TextWrapper">
            <GardenTitle className="GardenTitle">{gardensFromId[0].name}</GardenTitle>
            <GardenDescription>{gardensFromId[0].description}</GardenDescription>
          </TextWrapper>
          <DeleteBtn>
            <GardenDeleteButton label="정원 삭제하기" />
          </DeleteBtn>
        </ContentHeader>
        <ContentInner className="ContentInner">
          <LeftContent className="LeftContent">
            {page > totalPage ?
            // TODO : gardenPot 배치함
              emptyPots.map((idx) => {
                return (
                  <EmptyPotItem key={idx} onClick={handleOpenPotCreate} />
                )
              })
            :
              gardenPots.map((pot, idx) => {
                const potIndex = idx + 1;
                return (
                  <PotItem 
                    key={potIndex}
                    potName={pot.potName}
                    startAt={pot.startAt}
                    potColor={pot.potColor}
                    proceed={pot.proceed}
                    potImageUrl={pot.potImageUrl}
                    selected={selectedPotId === pot.potId}
                    onClick={() => handleSelectPot(pot.potId)}
                  />
                )
              })
            }
            <PotPagenation page={page} setPage={setPage} totalPage={totalPage} />
          </LeftContent>
          <RightContent className="RightContent">
            {/* gardenPots 비어있으면 설명 컴포넌트 */}
            {gardenPots.length === 0 ? (
              <Information />
            ) : (
              isChanged ? (
                <PotCreate />
              ) : (
                <TodoView potId={selectedPotId} AddTodoModalHandler={AddTodoModalHandler}/>
              )
            )}
            {/* 투두 추가 모달, 수정 모달 여는 함수 전달 */}
          </RightContent>
        </ContentInner>
      </Content>
      {/* <button onClick={() => EditGardenModalHandler(true)}>
        정원수정모달 열기
      </button>
      <button onClick={() => AddTodoModalHandler(true)}>
        TODO추가모달 열기
      </button>
      <button onClick={() => EditTodoModalHandler(true)}>
        TODO수정모달 열기
      </button> */}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* margin: 0 80px; */
    height: 68vw;
    width: 88vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1280px) {
        height: 800px;
        width: 1120px;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme, $category }) =>
        $category === "STUDY"
            ? theme.colors.green01
            : $category === "HOBBY"
              ? theme.colors.green04
              : $category === "EXERCISE"
                ? theme.colors.green07
                : theme.colors.green01};
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
    color: ${({ $category }) => ($category === "STUDY" ? "black" : "white")};

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
    width: 47%;
    background-color: white;
    border-radius: 32px;
    height: 100%;

    @media (max-width: 1280px) {
        width: 500px;
        border-radius: 32px;
    }
`;
