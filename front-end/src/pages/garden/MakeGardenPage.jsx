import React from "react";
import {useState, useEffect} from "react";
import styled from "styled-components";
// import StudyButton from "../../components/makeGardenContent/StudyButton";
// import ExerciseButton from "../../components/makeGardenContent/ExerciseButton";
// import HobbyButton from "../../components/makeGardenContent/HobbyButton";
//import Buttons from "../../components/makeGardenContent/Buttons";
import ClickHandler from "../../components/makeGardenContent/ClickHandler";
import Input from "../../components/makeGardenContent/Input";
import { ReactComponent as DogCloud } from "../../assets/images/dogcat_cloud.svg";
import ModalButton from '../../components/button/ModalButton';
import ReverseModalButton from '../../components/button/ReverseModalButton';
import { postGarden } from "../../apis/garden/editGarden";


/** 정원 생성 페이지 */
export default function MakeGardenPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedCategory, setCategory] = useState("STUDY");

    const handleTitle = (e) => {
        const text = e.target.value;
        setTitle(text);
    }

    const handleDescription = (e) => {
        const text = e.target.value;
        setDescription(text);
    }

    const handleSubmit = () => {
        postGarden({
            "name": title, 
            "description": description, 
            "category": selectedCategory
        });
    }

    const handleQuit = () => {
        // TODO : 취소누르면 이전페이지로 리턴하기
        console.log("취소")
    }

    return (
        <Layout>
            <DogCloud/>
            <Category>
                <Title>
                    키워갈 정원을 선택해주세요!
                </Title>
                <ClickHandler setCategory={setCategory}/>
            </Category>
            <InputContainer>
                <Input onChange={handleTitle} value={title} placeholder={"정원 이름을 적어주세요."} />
                <Input onChange={handleDescription} value={description} placeholder={"정원에 대한 설명을 작성해주세요."} />
            </InputContainer>
            <ButtonContainer>
                <ModalButton label="확인" onClick={handleSubmit}/>
                <ReverseModalButton label="취소" onClick={handleQuit}/>
            </ButtonContainer>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    background: ${({ theme }) => theme.colors.green01};
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    margin: 3%;
`
const Title = styled.span`
    font-size: 42px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 3%;
`

// const Subject = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 428px;
//     height: 50px;
//     gap: 40px;
// `
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin-top: 15px;
`