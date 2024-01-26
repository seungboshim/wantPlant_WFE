import styled from "styled-components";
import GardernHeader from "../../components/gardenHeader/GardenHeader";
import GardenDeleteButton from "../../components/button/GardenDeleteButton";
import PotItem from "../../components/gardenContent/PotItem";
import EmptyPotItem from "../../components/gardenContent/EmptyPotItem";
import Information from "../../components/gardenContent/Information";
import { useLocation } from "react-router-dom";
import PotCreate from "../../components/gardenContent/PotCreate";
import TodoView from "../../components/gardenContent/TodoView";
import { gardens, pots } from "../../apis/dummy/gardens";

/** 정원페이지 상단 컴포넌트 */
export default function GardenFirst({
  EditGardenModalHandler,
  AddTodoModalHandler,
  EditTodoModalHandler,
}) {
  const location = useLocation();
  // location = "/garden/{카테고리}"
  const pathname = location.pathname.split('/');
  // pathname = ["", "garden", "{카테고리}"] 저장됨
  const category = pathname[2];
  const gardenId = pathname[3];

  const gardenPots = gardens[0].gardenPots;
  console.log(pots[gardenPots[0]]);
  
  // 카테고리에 따라 다른 컴포넌트 및 색상
    return (
        <Wrapper>
          {/** $을 붙이는 이유 : transient props (배포시 문제 방지) */}
            <GardernHeader $category={category}/>
            <Content $category={category}>
                <ContentHeader>
                    <TextWrapper $category={category}>
                        <GardenTitle>{gardens[0].gardenTitle}</GardenTitle>
                        <GardenDescription>{gardens[0].gardenDescription}</GardenDescription>
                    </TextWrapper>
                    <DeleteBtn>
                        <GardenDeleteButton label="정원 삭제하기"/> 
                    </DeleteBtn>
                </ContentHeader>
                <ContentInner>
                    <LeftContent>
                        {/** TODO : 화분 데이터에 따른 페이지네이션 */}
                        {gardenPots.map((potId,idx) => {
                          return (
                            <PotItem 
                              key={potId}
                              potName={pots[potId-1].potName} 
                              period="2024/02/28" 
                              potColor={pots[potId-1].potColor} 
                              proceed={pots[potId-1].proceed}
                            />
                          )
                        })}
                        <EmptyPotItem />
                        <EmptyPotItem />
                    </LeftContent>
                    <RightContent>
                      {/* <Information /> */}
                      {/* <PotCreate /> */}
                      <TodoView potId={gardenPots[0]}/>
                    </RightContent>
                </ContentInner>
            </Content>
            <button onClick={() => EditGardenModalHandler(true)}>
              정원수정모달 열기
            </button>
            <button onClick={() => AddTodoModalHandler(true)}>
              TODO추가모달 열기
            </button>
            <button onClick={() => EditTodoModalHandler(true)}>
              TODO수정모달 열기
            </button> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0 80px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme, $category}) =>
        $category === "study" ? theme.colors.green01 :
        $category === "hobby" ? theme.colors.green04 :
        $category === "exercise" ? theme.colors.green07 : theme.colors.green01
    };
    border-radius: 20px;
`

const ContentHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
    margin: 40px 0 0 40px;
    display: flex;
    flex-direction: column;
    color: ${({$category}) => $category === "study" ? "black" : "white"};
`

const GardenTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const GardenDescription = styled.span`
  font-size: 18px;
`;

const DeleteBtn = styled.div`
  margin: 12px;
`;

const ContentInner = styled.div`
    display: flex;
    height: 566px;
    margin: 28px 56px 80px 56px;
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 532px;
  margin-right: 60px;
  justify-content: space-between;
`;

const RightContent = styled.div`
    width: 500px;
    background-color: white;
    border-radius: 32px;
`