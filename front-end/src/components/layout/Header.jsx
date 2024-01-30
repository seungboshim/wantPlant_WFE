import styled from 'styled-components';
import MainLogo from '../webHeader/LogoButton';
import Welcome from "../webHeader/WelcomMessage";
import BookButton from "../webHeader/BookButton";
import ProfileButton from "../webHeader/ProfileButton";
import LogoutButton from "../webHeader/LogoutButton";

export function Header() {
    return (
        <Container>
            <MainLogo/>
            <Menu>
                <Welcome/>
                <Buttons>
                    <BookButton/>
                    <ProfileButton/>
                    <LogoutButton/>
                </Buttons>
            </Menu>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #DDE1E6;
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    width: 220px;
    height: 20px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 900px;
    gap: 20px;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    width: 80px;
    height: 20px;
    gap: 10px;
`