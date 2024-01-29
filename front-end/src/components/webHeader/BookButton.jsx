import styled from 'styled-components';
import Book from '../../assets/images/bookButton.svg';

export default function BookButton(){
    return(
        <Wrapper>
            <Img src={Book}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`