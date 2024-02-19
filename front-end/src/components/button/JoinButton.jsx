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
    font-size: 36px;
    color: white;
    background-color: ${({theme}) => theme.colors.green07};
    border-radius: 60px;
    padding: 4px;
    width: 200px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`