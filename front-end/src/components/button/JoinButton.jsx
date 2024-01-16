import styled from "styled-components";

/** green 07 버튼 */
export default function JoinButton({ label, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 16px;
    color: white;
    background-color: ${({theme}) => theme.colors.green07};
    border-radius: 15px;
    padding: 4px;
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`