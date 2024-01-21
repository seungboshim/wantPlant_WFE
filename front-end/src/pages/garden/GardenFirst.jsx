import styled from "styled-components";
import GardernHeader from "../../components/gardenHeader/GardenHeader";
import GardenDeleteButton from "../../components/button/GardenDeleteButton";
import PotItem from "../../components/gardenContent/PotItem";
import EmptyPotItem from "../../components/gardenContent/EmptyPotItem";

/** 정원페이지 상단 컴포넌트 */
export default function GardenFirst() {
    // TODO : 현재 정원의 카테고리에 따라 다른 컴포넌트 불러오기
    return (
        <Wrapper>
            <GardernHeader category="study"/>
            <Content>
                <ContentHeader>
                    <TextWrapper>
                        <GardenTitle>정원 이름이름이름</GardenTitle>
                        <GardenDescription>정원 설명설명</GardenDescription>
                    </TextWrapper>
                    <DeleteBtn>
                        <GardenDeleteButton label="정원 삭제하기"/>
                    </DeleteBtn>
                </ContentHeader>
                <ContentInner>
                    <LeftContent>
                        {/** TODO : 화분 데이터에 따른 페이지네이션 */}
                        <PotItem pot_title="화분제목1" period="2024/02/28" pot_type="potRed" progress="50"/>
                        <PotItem pot_title="화분제목2" period="2024/02/15" pot_type="potBlue" progress="30"/>
                        <EmptyPotItem />
                        <EmptyPotItem />
                    </LeftContent>
                    <RightContent></RightContent>
                </ContentInner>
            </Content> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 80px;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.green01};
    border-radius: 20px;
`

const ContentHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
`

const TextWrapper = styled.div`
    margin: 40px 0 0 40px;
    display: flex;
    flex-direction: column;
`

const GardenTitle = styled.span`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 12px;
`

const GardenDescription = styled.span`
    font-size: 18px;
`

const DeleteBtn = styled.div`
    margin: 12px;
`

const ContentInner = styled.div`
    display: flex;
    height: 80%;
    margin: 28px 56px 80px 56px;
`

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 532px;
    margin-right: 60px;
    justify-content: space-between;
`

const RightContent = styled.div`
    flex-grow: 1;
    background-color: white;
    border-radius: 32px;
`