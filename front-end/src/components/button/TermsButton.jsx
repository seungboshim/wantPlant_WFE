import styled from "styled-components";

/** 이용약관 버튼: green10-white, radius30 */
export default function TermsButton({ onClick, label }) {
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
    width: 224px;
    height: 40px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.colors.green05};
    color: white;
    cursor: pointer;
    //font-weight: 300;
`