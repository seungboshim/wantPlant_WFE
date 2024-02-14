import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import MainLogoButton from "../webHeader/MainLogoButton";
import WelcomeMessage from "../webHeader/WelcomMessage";
import BookButton from "../webHeader/BookButton";
import ProfileButton from "../webHeader/ProfileButton";
import LogoutButton from "../webHeader/LogoutButton";

/** 사용자 닉네임을 받는 Header */
export function Header({ name }) {
    const [isScrolled, setIsScrolled] = useState(false);

    // 스크롤 시 헤더 스타일 변경
    useEffect(() => {
        const handleScroll = () => {
            // 현재 스크롤을 저장하는 currScroll
            const currScroll = window.scrollY;
            if (currScroll === 0) {
                // 스크롤이 맨 위
                setIsScrolled(false);
            } else {
                // 그 외
                setIsScrolled(true);
            }
        };
        // 'window' 에서 'scroll' 이 감지? 되면 handleScroll 함수를 호출하는 event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // 켜둔 event listener 끔
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <Container isscrolled={isScrolled ? "true" : ""}>
            <MainLogoButton />
            <Menu>
                <WelcomeMessage name={name} />
                <Buttons>
                    <BookButton />
                    <ProfileButton />
                    <LogoutButton />
                </Buttons>
            </Menu>
        </Container>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    width: auto;
    height: 80px;
    background-color: white;
    border-bottom: ${({ isscrolled, theme }) => (isscrolled ? `1px solid ${theme.colors.strokeGray}` : "none")};
    box-shadow: ${({ isscrolled, theme }) => (isscrolled ? `0px 0px 4px 0px ${theme.colors.strokeGray}` : "none")};
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
`;
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Buttons = styled.div`
    display: flex;
    align-items: center;
    width: 120px;
    justify-content: space-between;
`;
