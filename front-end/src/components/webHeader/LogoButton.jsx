import styled from 'styled-components';
import Logo from '../../assets/images/mainLogo.svg';

export default function MainLogo(){
    return(
        <Wrapper>
            <Img src={Logo}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 80px;
    height: 30px;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 50px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
