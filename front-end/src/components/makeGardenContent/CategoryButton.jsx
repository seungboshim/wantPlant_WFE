import styled from "styled-components";

export default function CategoryButton({onClick, id, label, value, style}){

    return(
        <Wrapper onClick={onClick} id={id} label={label} value={value} style={style}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 15%;
    height: auto;
    padding: 10px;
    text-align: center;
    border: none;
    border-radius: 20px;
    font-size: 24px;
    cursor: pointer;
`