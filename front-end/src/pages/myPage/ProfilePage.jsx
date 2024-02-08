import { React, useState, useEffect } from "react";
import styled from "styled-components";
import ProfileButton from "../../components/myPage/ProfileButton";
import InformButton from "../../components/myPage/InformButton";
import FAQButton from "../../components/myPage/FAQButton";
import { getMemberInform } from "../../apis/memberInform/memberInform";

export default function ProfilePage() {
    const [src, setSrc] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    
    useEffect(() => {
        getMemberInform(37).then((inform) => {
            setSrc(inform.profileImage)
            setName(inform.nickname)
            setNickname(inform.nickname)
            setEmail(inform.email)
        })
    }, [])

    console.log(src)
    console.log(name)
    console.log(nickname)
    console.log(email)

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
                    <FisrtWrapper>
                        <Picture>
                            <img src={src} width={100} height={100} alt="profile"/>
                        </Picture>
                        <Name>{name}님의 프로필</Name>
                    </FisrtWrapper>
                    <SecondWrapper>
                        <Part>
                            <Label>닉네임</Label>
                            <Inform>{nickname}</Inform>
                        </Part>
                        <Part>
                            <Label>현재 이메일</Label>
                            <Inform>{email}</Inform>
                        </Part>
                    </SecondWrapper>
                </ProfileContent>
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
const ProfileContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`
const FisrtWrapper = styled.div`
    width: 20%;
    height: 50%;
`
const Picture = styled.div`
    width: 100%;
    height: 85%;
`
const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    font-size: 20px;
    font-weight: 600;
`
const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    height: 70%;
`
const Part = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 100%;
    height: 30%;
`
const Label = styled.label`
    width: 100%;
    height: 70%;
    font-size: 20px;
    color: #FB5454;
`
const Inform = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
    border-radius: 5px;
    background-color: #F6F6F6;
    color: #BDBDBD;
`