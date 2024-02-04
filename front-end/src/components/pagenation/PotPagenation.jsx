import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function PotPagenation({ page, setPage, totalPage }) {
    useEffect(() => {
        setPage(page);
    }, page)

    const handleBackPagenation = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleFrontPagenation = () => {
        if (page <= totalPage) {
            setPage(page + 1);
        }
    }

    return (
        <Container>
            <LeftButton onClick={() => handleBackPagenation()} />
            <PageText>{page}</PageText>
            <RightButton onClick={() => handleFrontPagenation()} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    color: ${({theme}) => theme.colors.gray};
`

const LeftButton = styled(FaChevronLeft)`
    cursor: pointer;
    padding: 10px;
`

const PageText = styled.div`
    font-size: 24;
    margin: 0 2vw;
`

const RightButton = styled(FaChevronRight)`
    cursor: pointer;
    padding: 10px;
`