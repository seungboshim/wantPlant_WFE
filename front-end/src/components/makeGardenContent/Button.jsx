import styled from "styled-components";

export default function Button({onClick, id, label, value, style}){

    return(
        <Wrapper onClick={onClick} id={id} label={label} value={value} style={style}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    width: 116px;
    height: 60px;
    border: none;
    border-radius: 20px;
    font-size: 30px;
`
