import styled from "styled-components";
import GardernHeader from "../../components/gardenHeader/GardenHeader";
import GardenDeleteButton from "../../components/button/GardenDeleteButton";

export default function TestPage() {
    return (
        <Wrapper>
            <Container>
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
                        <LeftContent></LeftContent>
                        <RightContent></RightContent>
                    </ContentInner>
                </Content> 
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 1280px;
`

const Container = styled.div`
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
    font-size: 16px;
`

const DeleteBtn = styled.div`
    margin: 12px;
`

const ContentInner = styled.div`
    display: flex;
    height: 80%;
`

const LeftContent = styled.div`
    width: 50%;
    flex-grow: 1;
    border: 1px solid green;
    margin: 10px;
`

const RightContent = styled.div`
    width: 50%;
    flex-grow: 1;
    border: 1px solid green;
    margin: 10px;
`