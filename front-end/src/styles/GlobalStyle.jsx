import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        max-width: var(--max-width);
    }

    :root {
        /* 최대 가로축 길이 1280px */
        --max-width: 100vw;
        @media (max-width:1280px){
            width: 1280px; 
            --max-width:1280px;
        }
        --display: flex;
        --justify-content: center;
    }

    &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
        background: ${({theme}) => theme.colors.green02};
    }
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.green04};
    }
`;

export default GlobalStyle;
