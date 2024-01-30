import styled from "styled-components";

/** 로그인화면 반전 버튼: white-green10, radius12 */
export default function ReverseLoginButton({ onClick, label }) {
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
    background-color: white;
    color: ${({theme}) => theme.colors.green06};
    cursor: pointer;
`