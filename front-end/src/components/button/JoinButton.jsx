import styled from "styled-components";

/** 랜딩페이지 버튼: green7-white, radius15 */
export default function JoinButton({ label, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 12px;
    color: white;
    background-color: ${({theme}) => theme.colors.green07};
    border-radius: 60px;
    padding: 4px;
    width: 70px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`