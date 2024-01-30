import styled from "styled-components";

/** 임시비번 버튼: green02-black, radius12 */
export default function KeepPasswordButton({ label, onClick }) {
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
    background-color: ${({theme}) => theme.colors.green02};
    cursor: pointer;
`