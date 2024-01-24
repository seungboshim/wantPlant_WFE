import styled from "styled-components";

import GardenDeleteButton from "../../components/button/GardenDeleteButton";
import LoginButton from "../../components/button/LoginButton";
import TermsButton from "../../components/button/TermsButton";
import ReverseLoginButton from "../../components/button/ReverseLoginButton";
import JoinButton from "../../components/button/JoinButton";
import ReverseJoinButton from "../../components/button/ReverseJoinButton";
import ModalButton from "../../components/button/ModalButton";
import ReverseModalButton from "../../components/button/ReverseModalButton";
import AutoLoginToggle from "../../components/toggle/AutoLoginToggle";
import ResetPasswordButton from "../../components/button/ResetPasswordButton";
import KeepPasswordButton from "../../components/button/KeepPasswordButton";
import CategorySelectionButton from "../../components/button/CategorySelectionButton";

export default function TestPage() {
    return (
        <Container>
            <JoinButton label="로그인" />
            <ReverseJoinButton label="로그인" />
            <AutoLoginToggle />
            <ModalButton label="확인" />
            <ResetPasswordButton label="비밀번호를 재설정 할래요!"/>
            <KeepPasswordButton label="임시 비밀번호를 계속 사용할래요!" />
            <ReverseModalButton label="취소" />
            <GardenDeleteButton label="정원 삭제하기"/>
            <TermsButton label="이용 약관을 확인해주세요!"/>
            <LoginButton label="임시 비밀번호 발급 받기"/>
            <ReverseLoginButton label="BUTTON" />
            <CategorySelectionButton label="공부" selected />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`