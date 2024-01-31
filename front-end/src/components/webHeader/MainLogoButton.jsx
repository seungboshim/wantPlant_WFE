import styled from 'styled-components';
import Logo from '../../assets/images/logoContainer.svg';

export default function MainLogoButton(){
    return(
        <Wrapper>
            <img src={Logo}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 80px;
    height: 30px;
`