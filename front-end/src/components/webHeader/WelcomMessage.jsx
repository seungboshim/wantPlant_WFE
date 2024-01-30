import styled from 'styled-components';

export default function BookButton({name="ㅇㅇ"}){
    return(
        <Wrapper>
            {name}님, 반가워요!
        </Wrapper>
    )
}

const Wrapper = styled.span`
    display: flex;
    width: 120px;
    height: 20px;
    font-size: 14px;
    color: #4F6F53;

`
