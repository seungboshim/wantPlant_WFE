import styled from "styled-components";

/** 선택된거 selected, 버튼 색상 color */
export default function PotColorSelection({ selected, color, onClick }) {

    return (
        <Wrapper onClick={onClick}>
            <DefaultItem color={color} selected={selected}/>
        </Wrapper>
    )
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
    border: 0.5px solid ${({theme, color}) => theme.colors[color].text};
    background-color: ${({theme, color}) => theme.colors[color].bg};
    box-shadow: 0px 0px 3px 0px ${({theme, color}) => theme.colors[color].text};
`

const DefaultItem = styled.div`
    border-radius: 100%;
    width: 18px;
    height: 18px;
    background-color: ${({theme, color}) => theme.colors[color].bg};
    border: ${({theme, color, selected}) =>
        selected && `0.5px solid ${theme.colors[color].text}`
    };
    box-shadow: ${({theme, color, selected}) =>
        selected && `0px 0px 3px 0px ${theme.colors[color].text}`
    };
    cursor: pointer;
`