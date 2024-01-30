import styled from "styled-components";

/** 모달 반전 버튼 : white-green10, 테두리, radius15 */
export default function ReverseModalButton({ label, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 38px;
    color: ${({theme}) => theme.colors.green10};
    background-color: white;
    border: 1px solid ${({theme}) => theme.colors.green10};
    border-radius: 12px;
    cursor: pointer;
`