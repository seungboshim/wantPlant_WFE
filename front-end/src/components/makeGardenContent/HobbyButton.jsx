import styled from "styled-components";

export default function HobbyButton({onClick}){
    return(
        <Wrapper>
            <Text>취미</Text>
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