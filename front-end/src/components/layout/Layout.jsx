import styled from "styled-components"

export function Layout({children}) {
    // localStorage에 access 토큰 유무로 로그인 여부 확인
    // 있으면 상단 헤더만큼 패딩
    const token = localStorage.getItem("access");

    if (token) {
        return (
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }

}

const LayoutWrapper = styled.div`
    padding-top: 80px;
`