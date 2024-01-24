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
        /* --max-width: 1280px;  */
        --max-width: 90vw;
        --display: flex;
        --justify-content: center;
    }
`;

export default GlobalStyle;
