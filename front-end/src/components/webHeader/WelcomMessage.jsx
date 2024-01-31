import styled from 'styled-components';

export default function WelcomeMessage({name}){
    return(
        <Wrapper>
            {name}님, 반가워요!
        </Wrapper>
    )
}

const Wrapper = styled.span`
    display: flex;
    width: auto;
    font-size: 14px;
    color: ${({theme}) => theme.colors.green06};
    margin-right: 35px;
    font-weight: 600;
`
