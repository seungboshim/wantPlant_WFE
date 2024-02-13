import styled from "styled-components";
import { useState } from "react";
import CategoryButton from "./CategoryButton";


export default function ClickHandler() {
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

    return (
        <Subject>
            <CategoryButton onClick={clickHandler} id="study" label="공부" value="공부" style={{ color: studyColor, background: studyBack }} />
            <CategoryButton onClick={clickHandler} id="exercise" label="운동" value="운동" style={{ color: exerciseColor, background: exerciseBack }} />
            <CategoryButton onClick={clickHandler} id="hobby" label="취미" value="취미" style={{ color: hobbyColor, background: hobbyBack }} />
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