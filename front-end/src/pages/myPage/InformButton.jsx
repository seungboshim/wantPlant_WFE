import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
 
export default function InformButton(){
    const [buttonColor, setBack] = useState("none");
    const [opacity, setOpacity] = useState(100);
    const url = useLocation();
    const pathName = url.pathname.split("/");

    const navigate = useNavigate();
    useEffect(()=>{if(pathName[1] === "inform"){
        setBack("#F3B8B8");
        setOpacity(100);
    }
    else{
        setBack("none");
        setOpacity(100);
    }},[]);
    return(
        <Wrapper>
            <Button onClick={() => navigate("/inform")} style={{backgroundColor: buttonColor, opacity: opacity}}>하고심다 사용 방법 소개</Button>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
`
const Button = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border-color: none;
    color: #FB5454;
    cursor: pointer;
`