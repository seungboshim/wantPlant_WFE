import styled from "styled-components";

export default function InputName({onChange}){
    return(
        <Wrapper type="text"  onClick={onChange} placeholder="정원 이름을 입력해주세요."/>
    )
}

const Wrapper = styled.input`
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
