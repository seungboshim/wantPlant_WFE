import styled from 'styled-components';
import Profile from '../../assets/images/profile.svg';
import { useNavigate } from 'react-router-dom';

export default function ProfileButton({onClick}){
    const navigate = useNavigate();
    return(
        <Wrapper onClick={onClick}>
            <ProfileImg src={Profile}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
`
const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
`