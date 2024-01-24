import styled from "styled-components";

/** 임시비번 변경 버튼: pink01-black, radius12 */
export default function ResetPasswordButton({ label, onClick }) {
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
    width: 300px;
    height: 50px;
    border-radius: 12px;
    color: black;
    background-color: ${({theme}) => theme.colors.pink01};
    cursor: pointer;
`