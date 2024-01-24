import styled from "styled-components";

/** 투두 태그 : 투두 갯수 받음 */
export default function TodoTagItem({ todoNum }) {
    return (
        <Wrapper>
            Todo +{todoNum}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 3px 10px;
    font-size: 12px;
    width: fit-content;
    height: fit-content;
    background-color: ${({theme}) => theme.colors.lightGray};
    color: ${({theme}) => theme.colors.tagGray};
`