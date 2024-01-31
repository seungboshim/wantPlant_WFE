import styled from "styled-components"

export function Layout({children}) {
    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
    padding-top: 80px;
`