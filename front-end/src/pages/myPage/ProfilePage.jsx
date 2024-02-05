import styled from "styled-components";
import ProfileButton from "../../components/myPage/ProfileButton";
import InformButton from "../../components/myPage/InformButton";
import FAQButton from "../../components/myPage/FAQButton";

export default function ProfilePage() {
    const src="";
    const name="ㅇㅇㅇ";
    const nickName="현재 닉네임";
    const tel="현재 휴대폰 번호";
    const email="현재 이메일";
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
                            <Inform>{nickName}</Inform>
                        </Part>
                        <Part>
                            <Label>휴대폰 번호</Label>
                            <Inform>{tel}</Inform>
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