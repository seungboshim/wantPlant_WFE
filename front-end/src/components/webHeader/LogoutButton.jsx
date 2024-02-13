import styled from 'styled-components';
import Logout from '../../assets/images/logout.svg';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton(){
    const navigate = useNavigate();
    return(
        <Wrapper onClick={() => navigate("/login")}>
            <LogoutImg src={Logout}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
`
const LogoutImg = styled.img`
    width: 100%;
    height: 100%;
`