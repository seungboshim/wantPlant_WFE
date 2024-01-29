import styled from "styled-components";
import React, {useState} from "react";
import autoOn from "../../assets/images/auto_on.svg"
import autoOff from "../../assets/images/auto_off.svg"

/** 자동로그인 토글 */
export default function AutoLoginToggle() {
    const [imageSrc, setImageSrc] = useState(autoOff);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setImageSrc(autoOff);
            setIsClicked(false);
        } 
        else {
            setImageSrc(autoOn);
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