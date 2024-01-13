import styled from "styled-components";

export default function MainPage() {
    return (
        <div>
            <Login>로그인</Login>
            <span>랜딩페이지 들어갈곳</span>
        </div>
    )
}

const Login = styled.button`
    padding: 4px;
    border: 1px solid black;
    border-radius: 20%;
`;