import styled from "styled-components";

export default function TestPage() {
    return (
        <Container>
            <Header />
            <Content>
                <ContentHeader>
                    <GardenText></GardenText>
                    <DeleteBtn></DeleteBtn>
                </ContentHeader>
                <ContentInner>
                    <LeftContent></LeftContent>
                    <RightContent></RightContent>
                </ContentInner>
            </Content> 
        </Container>
    )
}

const Container = styled.div`
    margin: 0 80px;
    border: 1px solid red;
    width: auto;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    width: 400px;
    height: 40px;
    border: 1px solid red;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
`

const ContentHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
`

const GardenText = styled.div`
    width: 70%;
    flex-grow: 1;
    border: 1px solid blue;
    margin: 10px;
`

const DeleteBtn = styled.div`
    width: 30%;
    flex-grow: 1;
    border: 1px solid blue;
    margin: 10px;
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