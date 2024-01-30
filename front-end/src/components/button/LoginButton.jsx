import styled from "styled-components";

/** 로그인화면 버튼: green10-white, radius12 */
export default function LoginButton({ onClick, label }) {
    return (
        <Wrapper onClick={onClick}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 35px;
    border-radius: 12px;
    color: white;
    background-color: ${({theme}) => theme.colors.green10};
    cursor: pointer;
`