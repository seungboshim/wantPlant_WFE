import styled from 'styled-components';
import Book from '../../assets/images/bookButton.svg';
import { useNavigate } from 'react-router-dom';

export default function BookButton({onClick}){
    const navigate = useNavigate();
    return(
        <Wrapper onClick={onClick}>
            <BookImg src={Book}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
`
const BookImg = styled.img`
    width: 100%;
    height: 100%;
`