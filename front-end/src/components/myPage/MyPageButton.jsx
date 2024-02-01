import styled from "styled-components";

export default function MyPageButton({ label, style, onClick }) {
    return (
        <Wrapper onClick={onClick} style={style}>{label}</Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    height: 70%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #FB5454;
    cursor: pointer;
`
