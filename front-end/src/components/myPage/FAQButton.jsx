import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MyPageButton from "./MyPageButton";
 
export default function FAQButton(){
    const [buttonColor, setBack] = useState("none");
    const [opacity, setOpacity] = useState(100);
    const url = useLocation();
    const pathName = url.pathname.split("/");

    const navigate = useNavigate();
    useEffect(()=>{if(pathName[1] === "faq"){
        setBack("#F3B8B8");
        setOpacity(100);
    }
    else{
        setBack("none");
        setOpacity(100);
    }},[]);
    return(
        <Wrapper>
            <MyPageButton 
                onClick={() => navigate("/faq")} 
                style={{backgroundColor: buttonColor, opacity: opacity}} 
                label="FAQ"
            />
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
