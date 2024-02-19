import styled from "styled-components";
import React from "react"
import { useNavigate } from "react-router-dom";

export default function StartButton({style}){
    const navigate = useNavigate()
    return(
        <Button onClick={() => navigate("/login")} style={style}>하고심다, 시작하기</Button>
    )
}

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2000px;
    height: 400px;
    border-radius: 150px;
    font-size: 150px;
    font-weight: 700;
    color: #3a4e39;
    background-color: #FFFFFF;
    cursor: pointer;
`