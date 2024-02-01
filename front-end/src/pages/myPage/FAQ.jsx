import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import InformButton from "./InformButton";
import FAQButton from "./FAQButton";

export default function FAQPage() {
    return (
        <Wrapper>
            <Question>궁금한 점이 있나요?</Question>
            <Container>
                <Buttons>
                    <ProfileButton/>
                    <InformButton/>
                    <FAQButton/>
                </Buttons>
                <FAQContent>
                    <Talks>
                        <Talk1>Q. 정원, 화부, 투두 설정은 어떻게 하는 건가요? </Talk1>
                        <Talk2>정원은 공부/운동/취미 카테고리 중 하나를 선택해서 자유롭게 가꿀 수 있는 엄청 큰 목표입니다.<br/>
                              그 속에서 키울 수 있는 화분은 작은 목표, 그리고 물을 주는 행위가 투두인데요!<br/><br/>

                              쉬운 예로는 운동이라는 카테고리를 정한다면, 나는야 운동왕이 정원이 되는 거고<br/>
                              10KG 감량 / 공복유산소 / 식단 관리 같은 항목이 화분이 되는 겁니다.<br/><br/>

                              해당 화분에 대해서도 목표랑 할일을 설정해서 물주기 캘린더 페이지를 꾸밀 수 있습니다.<br/>
                            말 그대로 할일을 하고, 화분을 심을 수 있는 것이죠.
                        </Talk2>
                        <Talk3>Q. 전체 도감은 어떤 기능인가요?</Talk3>
                        <Talk4>다 키운 화분을 모아서 보여주는 페이지입니다.</Talk4>
                        <Talk5>Q. 정원의 갯수가 제한적인가요?</Talk5>
                        <Talk6>아뇨! 정원의 카테고리만 3개인 것이지, 정원은 여러 개 만들 수 있습니다.</Talk6>
                    </Talks>
                </FAQContent>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    height: 1000px;
    background: linear-gradient(180deg, #eebfb0 20%,#8bb58f 80%);
`
const Question = styled.p`
    width: 36%;
    height: 7%;
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
const FAQContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`
const Talks = styled.div`
    width: 95%;
    height: 90%;
`
const Talk1 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 8%;
    background-color: #F6F6F6;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    border: 1px solid #AAAAAA;
`
const Talk2 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 40%;
    margin-left: 30%;
    background-color: #F6F6F6;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    border: 1px solid #AAAAAA;
`
const Talk3 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 8%;
    background-color: #F6F6F6;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    border: 1px solid #AAAAAA;
`
const Talk4 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 8%;
    margin-left: 65%;
    background-color: #F6F6F6;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    border: 1px solid #AAAAAA;
`
const Talk5 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 8%;
    background-color: #F6F6F6;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    border: 1px solid #AAAAAA;
`
const Talk6 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53%;
    height: 8%;
    margin-left: 47%;
    background-color: #F6F6F6;
    border-radius: 10px;
    color: #000000;
    font-size: 15px;
    border: 1px solid #AAAAAA;
`