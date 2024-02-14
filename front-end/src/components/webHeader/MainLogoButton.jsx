import styled from 'styled-components';
//import Logo from '../../assets/images/logoContainer.svg';
import Logo from '../../assets/images/newLogoContainer.svg';

export default function MainLogoButton(){
    return(
        <Wrapper>
            <img src={Logo}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100px;
    height: 50px;
`