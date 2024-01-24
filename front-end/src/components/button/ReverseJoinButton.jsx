import styled from "styled-components";

/** 랜딩페이지 반전 버튼: white-green7, radius15 */
export default function ReverseJoinButton({ label, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 16px;
    color: ${({theme}) => theme.colors.green07};
    background-color: white;
    border: 1px solid ${({theme}) => theme.colors.green07};
    border-radius: 15px;
    padding: 3px;
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`