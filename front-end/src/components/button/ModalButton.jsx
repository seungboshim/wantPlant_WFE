import styled from "styled-components";

/** 모달 버튼 : green10-white, radius15 */
export default function ModalButton({ label, onClick }) {
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
    width: 140px;
    height: 40px;
    color: white;
    background-color: ${({theme}) => theme.colors.green10};
    border-radius: 12px;
    cursor: pointer;
`