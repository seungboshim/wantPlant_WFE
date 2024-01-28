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

  // TODO : gardenFromId(gardenId) 로 정원 정보 받아오기
  
  // 해당 정원의 모든 화분 배열
  // TODO : potsFromGarden(gardenId)
  const gardenPots = potsFromGarden.pots
  // TODO : 페이지네이션 용 데이터도 가져오기

  
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
            {/** TODO : 화분 데이터에 따른 페이지네이션 */}
            {gardenPots.map((pot, idx) => {
              const potIndex = idx + 1;
              return (
                <PotItem 
                  key={potIndex}
                  potName={pot.potName} 
                  startAt={pot.startAt}
                  potColor={pot.potColor}
                  proceed={pot.proceed}
                  potImageUrl={pot.potImageUrl}
                />
              )
            })}
          </LeftContent>
          <RightContent className="RightContent">
            {/* TODO : 동작에 따른 컴포넌트 렌더링, id값에 따른 처리 */}
            {/* <Information /> */}
            {/* <PotCreate /> */}
            <TodoView potId={gardenPots[0].potId} AddTodoModalHandler={AddTodoModalHandler}/>
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
