import styled from "styled-components";
import logo from "../../assets/images/logo.svg"
import PotColorSelection from "./PotColorSelection";
import { useState } from "react";

/** 새 화분 생성 컴포넌트 */
export default function PotCreate() {
    const [selectedColor, setSelectedColor] = useState("");
    const potTypes = ["potPurple", "potGreen", "potRed", "potOrange", "potBlue", "potPink"];
    console.log(selectedColor);

    return (
        <Wrapper>
            <Container>
                <img src={logo} width={40} height={48}/>
                <Title>새로운 화분을 추가해주세요.</Title>
                <PotInputContainer>
                    <PotTitleInput placeholder="화분 이름을 입력해주세요."></PotTitleInput>
                    <PotColorSelectionWrapper>
                        <PotColorSelectionTitle>원하는 색상을 선택해주세요.</PotColorSelectionTitle>
                        <PotColorSelectionContainer>
                            {potTypes.map((color, idx) => {
                                return (
                                    <PotColorSelection 
                                        key={idx}
                                        color={color}
                                        onClick={() => setSelectedColor(idx)} 
                                        selected={selectedColor === idx}
                                    />
                                );
                            })}
                        </PotColorSelectionContainer>
                    </PotColorSelectionWrapper>
                </PotInputContainer>
                <PotCreateButton>
                    <button>ㅇㅇ</button>
                </PotCreateButton>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Container = styled.div`
    margin: 40px 52px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
`

const PotInputContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PotTitleInput = styled.input`
    width: -webkit-fill-available;
    font-size: 18px;
    padding: 16px;
    border: 1px solid ${({theme}) => theme.colors.strokeGray};
    border-radius: 15px;
`

const PotColorSelectionWrapper = styled.div`
    width: -webkit-fill-available;
    font-size: 18px;
    margin-top: 20px;
    height: 124px;
    border: 1px solid ${({theme}) => theme.colors.strokeGray};
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PotColorSelectionTitle = styled.span`
    
`

const PotColorSelectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`

const PotCreateButton = styled.div`
    
`
