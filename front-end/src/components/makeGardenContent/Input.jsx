import styled from "styled-components";

export default function Input({ onChange, placeholder }) {
    return (
        <Wrapper type="text" onClick={onChange} placeholder={placeholder} />
    )
}

const Wrapper = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    width: 700px;
    height: 80px;
    border-radius: 30px;
    font-size: 30px;
    background: #FFFFFF;
    border: none;
    &::placeholder {
        color: #757373;
        font-size: 30px;
    }
`
