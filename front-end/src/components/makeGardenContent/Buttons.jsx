import styled from "styled-components";
import {useState} from "react";

export default function Buttons(){
    const [studyColor, setStudyColor] = useState("#FFFFFF");
    const [studyBack, setStudyBack] = useState("#4F6F53");

    const [exerciseColor, setExerciseColor] = useState("#4F6F53");
    const [exerciseBack, setExerciseBack] = useState("#FFFFFF");

    const [hobbyColor, setHobbyColor] = useState("#4F6F53");
    const [hobbyBack, setHobbyBack] = useState("#FFFFFF");

    let selectedCategory = "study";
    const clickHandler=(e)=>{
        selectedCategory = e.target.id;
        if (selectedCategory === "study"){
            setStudyColor("#FFFFFF");
            setStudyBack("#4F6F53");
            
            setExerciseColor("#4F6F53");           
            setExerciseBack("#FFFFFF");

            setHobbyColor("#4F6F53");
            setHobbyBack("#FFFFFF");
        }
        else if(selectedCategory === "exercise"){
            setStudyColor("#4F6F53");
            setStudyBack("#FFFFFF");

            setExerciseColor("#FFFFFF");
            setExerciseBack("#4F6F53");

            setHobbyColor("#4F6F53");
            setHobbyBack("#FFFFFF");
        }
        else{
            setStudyColor("#4F6F53");
            setStudyBack("#FFFFFF");

            setExerciseColor("#4F6F53");
            setExerciseBack("#FFFFFF");

            setHobbyColor("#FFFFFF");
            setHobbyBack("#4F6F53");
        }
    }

    return(
        <Subject>
            <Wrapper onClick={clickHandler} id = "study" style={{color:studyColor, background: studyBack}}>
                공부
            </Wrapper>
            <Wrapper onClick={clickHandler} id = "exercise" style={{color: exerciseColor, background: exerciseBack}}>
                운동
            </Wrapper>
            <Wrapper onClick={clickHandler} id = "hobby" style={{color: hobbyColor, background: hobbyBack}}>
                취미
            </Wrapper>
        </Subject>
    )
}

const Subject = styled.div`
     display: flex;
     flex-direction: row;
     width: 428px;
     height: 50px;
     gap: 40px;
`

const Wrapper = styled.button`
    width: 116px;
    height: 60px;
    border: none;
    border-radius: 20px;
    font-size: 30px;
`