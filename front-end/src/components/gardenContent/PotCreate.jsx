import styled from "styled-components";
import logo from "../../assets/images/logo.svg"
import PotColorSelection from "./PotColorSelection";
import { useState } from "react";
import ModalButton from '../button/ModalButton';
import ReverseModalButton from "../button/ReverseModalButton";
import { postPot } from '../../apis/pot/editPot';

/** 새 화분 생성 컴포넌트 */
export default function PotCreate({ gardenId, handleClose }) {
    const [potName, setPotName] = useState("");

    const [selectedColor, setSelectedColor] = useState("");
    const potColors = ["PURPLE", "GREEN", "RED", "ORANGE", "BLUE", "PINK"];


    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }
    
    const todayString = year + "-" + month + "-" + day;

    const handleSubmit = () => {
        postPot({
            "gardenId": gardenId,
            "potName": potName,
            "potTageColor": potColors[selectedColor],
            "startAt": todayString
        })
            .then((result) => {
                console.log(result);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleChange = (e) => {
        setPotName(e.target.value);
    }

    return (
        <Wrapper>
            <Container>
                <img src={logo} width={40} height={48}/>
                <Title>새로운 화분을 추가해주세요.</Title>
                <PotInputContainer>
                    <PotTitleInput value={potName} type="text" placeholder="화분 이름을 입력해주세요." onChange={handleChange}></PotTitleInput>
                    <PotColorSelectionWrapper>
                        <PotColorSelectionTitle>원하는 색상을 선택해주세요.</PotColorSelectionTitle>
                        <PotColorSelectionContainer>
                            {potColors.map((color, idx) => {
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
                    <ModalButton label="확인" onClick={handleSubmit} />
                    <ReverseModalButton label="취소" onClick={handleClose}/>
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
    display: flex;
    width: 85%;
    justify-content: space-between;
`
