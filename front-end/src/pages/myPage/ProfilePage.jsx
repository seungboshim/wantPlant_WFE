import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import InformButton from "./InformButton";
import FAQButton from "./FAQButton";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    return (
        <Wrapper>
            <Question>궁금한 점이 있나요?</Question>
            <Container>
                <Buttons>
                    <ProfileButton/>
                    <InformButton/>
                    <FAQButton/>
                </Buttons>
                <ProfileContent>

                </ProfileContent>
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
    border: 1px solid black;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 60%;
    border: 1px solid black;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:70%;
    height: 10%;
    border: 1px solid black;
`
const ProfileContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    border: 1px solid black;
`
const FisrtWrapper = styled.div`
    width: 20%;
    height: 50%;
    border: 1px solid black;
`