import React from "react";
import axios from "axios";
import {useState} from "react";
//import {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "../../components/makeGardenContent/Button";
import Input from "../../components/makeGardenContent/Input";
import { ReactComponent as DogCloud } from "../../assets/images/dog_cloud.svg";


/** 정원 생성 페이지 */
export default function MakeGarden() {
    const [category, setCategory] = useState("공부");
    const [name, setName] = useState("");
    const [inform, setInform] = useState("");

    const [studyColor, setStudyColor] = useState("#FFFFFF");
    const [studyBack, setStudyBack] = useState("#4F6F53");

    const [exerciseColor, setExerciseColor] = useState("#4F6F53");
    const [exerciseBack, setExerciseBack] = useState("#FFFFFF");

    const [hobbyColor, setHobbyColor] = useState("#4F6F53");
    const [hobbyBack, setHobbyBack] = useState("#FFFFFF");

    let selectedCategory = "study";
    const clickHandler = (e) => {
        selectedCategory = e.target.id;
        if (selectedCategory === "study") {
            setStudyColor("#FFFFFF");
            setStudyBack("#4F6F53");

            setExerciseColor("#4F6F53");
            setExerciseBack("#FFFFFF");

            setHobbyColor("#4F6F53");
            setHobbyBack("#FFFFFF");
        }
        else if (selectedCategory === "exercise") {
            setStudyColor("#4F6F53");
            setStudyBack("#FFFFFF");

            setExerciseColor("#FFFFFF");
            setExerciseBack("#4F6F53");

            setHobbyColor("#4F6F53");
            setHobbyBack("#FFFFFF");
        }
        else {
            setStudyColor("#4F6F53");
            setStudyBack("#FFFFFF");

            setExerciseColor("#4F6F53");
            setExerciseBack("#FFFFFF");

            setHobbyColor("#FFFFFF");
            setHobbyBack("#4F6F53");
        }
    }
    
    const SetCategory=(e)=>{
        setCategory(e.target.value);
    }
    const SetName=(e)=>{
        setName(e.target.value);
    }
    const SetInform=(e)=>{
        setInform(e.target.value);
    }
    const onSubmitHandler = async () => {
        await axios.post('/api/gardens', {name: name, descrition: inform, category: category});
    }
    const activeEnter = (e) => {
        if(e.key === "Enter") {
          onSubmitHandler();
        }
      }
    return (
        <Layout>
            <DogCloud/>
            <Category>
                <Title>
                    키워갈 정원을 선택해주세요!
                </Title>
                <Subject>
                    <Button onClick={{clickHandler, SetCategory}} id="study" label="공부" value="공부" style={{ color: studyColor, background: studyBack }} />
                    <Button onClick={{clickHandler, SetCategory}} id="exercise" label="운동" value="운동" style={{ color: exerciseColor, background: exerciseBack }} />
                    <Button onClick={{clickHandler,SetCategory}} id="hobby" label="취미" value="취미" style={{ color: hobbyColor, background: hobbyBack }} />
                </Subject>
            </Category>
            <InputWrapper>
                <Input onChange={SetName} placeholder={"정원 이름을 적어주세요"} />
                <Input onChange={SetInform} onKeyDown={activeEnter} placeholder={"정원에 대한 설명을 작성해주세요"} />
            </InputWrapper>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    height: 832px;
    background: ${({ theme }) => theme.colors.green01};
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 558px;
    height: 162px;
    margin-top: 30px;
    gap: 66px;
`
const Title = styled.span`
    width: 558px;
    height: 50px;
    font-size: 42px;
    font-weight: 700;
    color: #000000;
`

// const Subject = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 428px;
//     height: 50px;
//     gap: 40px;
// `
const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 170px;
    margin-top: 120px;
    gap: 10px;
`
const Subject = styled.div`
     display: flex;
     flex-direction: row;
     width: 428px;
     height: 50px;
     gap: 40px;
`
