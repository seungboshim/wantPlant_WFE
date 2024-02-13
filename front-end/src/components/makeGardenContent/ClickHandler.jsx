import styled from "styled-components";
import { useState, useEffect } from "react";
import CategoryButton from "./CategoryButton";

export default function ClickHandler({ setCategory }) {
    const [studyColor, setStudyColor] = useState("#FFFFFF");
    const [studyBack, setStudyBack] = useState("#4F6F53");

    const [exerciseColor, setExerciseColor] = useState("#4F6F53");
    const [exerciseBack, setExerciseBack] = useState("#FFFFFF");

    const [hobbyColor, setHobbyColor] = useState("#4F6F53");
    const [hobbyBack, setHobbyBack] = useState("#FFFFFF");
    
    const clickHandler = (e) => {
        const category = e.target.id;
        setCategory(category);
        
        if (category === "STUDY") {
            setStudyColor("#FFFFFF");
            setStudyBack("#4F6F53");

            setExerciseColor("#4F6F53");
            setExerciseBack("#FFFFFF");

            setHobbyColor("#4F6F53");
            setHobbyBack("#FFFFFF");
        }
        else if (category === "EXERCISE") {
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

    return (
        <Subject>
            <CategoryButton onClick={clickHandler} id="STUDY" label="공부" value="STUDY" style={{ color: studyColor, background: studyBack }} />
            <CategoryButton onClick={clickHandler} id="EXERCISE" label="운동" value="EXERCISE" style={{ color: exerciseColor, background: exerciseBack }} />
            <CategoryButton onClick={clickHandler} id="HOBBY" label="취미" value="HOBBY" style={{ color: hobbyColor, background: hobbyBack }} />
        </Subject>
    )
}

const Subject = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-evenly;
    height: auto;
`