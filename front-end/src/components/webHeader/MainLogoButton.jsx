import styled from 'styled-components';
//import Logo from '../../assets/images/logoContainer.svg';
import Logo from '../../assets/images/newLogoContainer.svg';

export default function MainLogoButton({onClick}){
    return(
        <Wrapper onClick={onClick}>
            <img src={Logo}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100px;
    height: 50px;
`