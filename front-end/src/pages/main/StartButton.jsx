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
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22vw;
    height: 10vh;
    border-radius: 150px;
    font-size: 4vh;
    font-weight: 700;
    margin-top: 130vh;
    margin-left: 38vw;
    color: #3a4e39;
    background-color: #FFFFFF;
    cursor: pointer;
`