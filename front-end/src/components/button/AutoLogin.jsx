import styled from "styled-components";
import React, {useState} from "react";
export default function AutoLoginButton() {
    const [imageSrc, setImageSrc] = useState("../../assets/images/auto_off.svg");
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setImageSrc("../../assets/images/auto_off.svg");
            setIsClicked(false);
        } 
        else {
            setImageSrc("../../assets/images/auto_on.svg");
            setIsClicked(true);
        }
      };
    return (
        <Img src={imageSrc} width={40} height={20} onClick={handleClick} alt="check" />
    )
}

const Img= styled.img`
    cursor: pointer;
`