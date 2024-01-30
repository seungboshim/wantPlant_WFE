import styled from "styled-components";

/** 카테고리 선택 버튼 (label, handleClick, selected 인자로 받음) */
export default function CategorySelectionButton({ label, onClick, selected }) {
    // selectedCategory 상태 정의 필요
    // onClick = {() => setSelectedCategory()}
    // selected = {selectedCategory === label}
    return (
        <Wrapper onClick={onClick} selected={selected}>
            {label}
        </Wrapper>
    )
}
const Wrapper = styled.button`
    border-radius: 20px;
    width: 60px;
    height: 30px;
    margin: 0px 20px;
    font-size: 18px;
    background-color: ${({ theme, selected }) => 
        selected ? theme.colors.green06 : 'white'
    };
    color: ${({ theme, selected }) => 
        selected ? 'white' : theme.colors.green06
    };
    border: ${({ theme, selected }) => 
        selected ? '0px' : `1px solid ${theme.colors.green06}`
    }; // 테두리 두께 1px, 색상 설정
    cursor: pointer;
`;