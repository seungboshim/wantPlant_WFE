import styled from "styled-components";

export default function StudyButton({onClick}){
    return(
        <Wrapper>
            <Text>공부</Text>
        </Wrapper>
    )
}

const Wrapper = styled.button`
    width: 116px;
    height: 60px;
    border-radius: 20px;
    background: #FFFFFF;
`

const Text = styled.label`
    font-size: 30px;
    color: #4F6F53;
`