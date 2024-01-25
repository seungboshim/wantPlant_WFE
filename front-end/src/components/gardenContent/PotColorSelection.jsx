import styled from "styled-components";

/** 선택된거 selected, 버튼 색상 color */
export default function PotColorSelection({ selected, color, onClick }) {
    if (selected) {
        return (
            <Wrapper>
                <SelectedItem color={color} />
            </Wrapper>
        ) 
    } else {
        return (
            <Wrapper>
                <DefaultItem color={color} />
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
    background-color: ${({theme, color}) => theme.colors[color].bg};
`

const DefaultItem = styled.div`
    border-radius: 100%;
    width: 18px;
    height: 18px;
    background-color: ${({theme, color}) => theme.colors[color].bg};
`