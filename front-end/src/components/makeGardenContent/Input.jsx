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
    padding: 15px 30px;
    width: 50vw;
    border-radius: 20px;
    font-size: 24px;
    background: #FFFFFF;
    border: none;
    &::placeholder {
        color: #757373;
        font-size: 24px;
    }
    margin-bottom: 15px;
`
