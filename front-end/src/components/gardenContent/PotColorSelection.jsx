import styled from "styled-components";

/** 선택된거 selected, 버튼 색상 bgColor */
export default function PotColorSelection({ selected, bgColor, onClick }) {
    if (selected) {
        return (
            <Wrapper>
                <SelectedItem bgColor={bgColor} />
            </Wrapper>
        ) 
    } else {
        return (
            <Wrapper>
                <DefaultItem bgColor={bgColor} />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    border-radius: 100%;
    width: 18px;
    height: 18px;
    cursor: pointer;
`

const SelectedItem = styled.div`
    border-radius: 100%;
    width: 16px;
    height: 16px;
    border: 1px solid ${({theme}) => theme.colors.strokeGray};
    background-color: ${({theme, bgColor}) => theme.colors[bgColor].bg};
`

const DefaultItem = styled.div`
    border-radius: 100%;
    width: 18px;
    height: 18px;
    background-color: ${({theme, bgColor}) => theme.colors[bgColor].bg};
`