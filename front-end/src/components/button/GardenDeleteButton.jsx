import styled from "styled-components";

/** 정원삭제 버튼 : green05-white, radius15 */
export default function GardenDeleteButton({ label, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 16px;
    color: white;
    background-color: ${({theme}) => theme.colors.green05};
    border-radius: 15px;
    width: 110px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`