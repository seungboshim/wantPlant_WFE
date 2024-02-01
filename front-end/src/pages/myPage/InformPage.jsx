import styled from "styled-components";
import ProfileButton from "../../components/myPage/ProfileButton";
import InformButton from "../../components/myPage/InformButton";
import FAQButton from "../../components/myPage/FAQButton";

export default function informPage() {
    return (
        <Wrapper>
            <Question>궁금한 점이 있나요?</Question>
            <Container>
                <Buttons>
                    <ProfileButton/>
                    <InformButton/>
                    <FAQButton/>
                </Buttons>
                <InformContent>
                    <List>
                        <Menu>1.카테고리 선택하기(공부/운동/취미)</Menu>
                        <Menu>2.정원 이름 정하기</Menu>
                        <Menu>3.정원 속 키우고 싶은 목표 화분 심기</Menu>
                        <Menu>4.화분을 키우기 위한 투두리스트 작성하기</Menu>
                    </List>
                </InformContent>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #eebfb0 20%,#8bb58f 80%);
`
const Question = styled.p`
    font-size: 50px;
    font-weight: 700;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 60%;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:70%;
    height: 10%;
`
const InformContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 60%;
    height: 60%;
`
const Menu = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: #F6F6F6;
    color: #000000;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 400;
`