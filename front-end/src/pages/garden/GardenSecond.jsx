import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import GardenBox from "../../components/gardenContent/GardenBox";
import NewGardenBox from "../../components/gardenContent/NewGardenBox";
import img1 from "../../assets/images/logo_pot.svg";
import { Server } from "../../apis/setting";

/** 정원페이지 하단 컴포넌트 */
export default function GardenSecond({ gardenId }) {
    const navigate = useNavigate();

    const [gardens, setGardens] = useState([]);
    const [gardenComponents, setGardenComponents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalElementCnt = 3;

    const addGardenBtnHandler = () => {
        navigate("/garden/add");
    };

    const getGardens = async () => {
        try {
            const tempGardens = await Server.get(`/api/gardens`);
            return tempGardens;
        } catch (err) {
            console.log(err);
        }
    };

    const getGardenComponents = () => {
        let newGardenComponents = [];
        getGardens()
            .then((res) => {
                let newGardens = res.data.result.gardens;
                let startIdx = (currentPage - 1) * totalElementCnt;
                let endIdx =
                    startIdx + totalElementCnt > newGardens.length ? newGardens.length : startIdx + totalElementCnt;
                for (let i = startIdx; i < endIdx; i++) {
                    let garden = newGardens[i];
                    newGardenComponents.push(
                        <GardenBox
                            garden_title={garden.name}
                            garden_category={garden.gardenCategory}
                            garden_description={garden.description}
                            potList={garden.potList}
                        />,
                    );
                }
                if (newGardenComponents.length < totalElementCnt) {
                    for (let i = newGardenComponents.length; i < totalElementCnt; i++) {
                        newGardenComponents.push(
                            <NewGardenBox addGardenBtnHandler={addGardenBtnHandler}></NewGardenBox>,
                        );
                    }
                }

                setGardenComponents(newGardenComponents);
            })
            .catch((err) => {
                console.log(err);
            });
        return newGardenComponents;
    };

    const goToPrevPage = () => {
        const newPage = currentPage <= 1 ? 1 : currentPage - 1;
        setCurrentPage(newPage);
    };

    const goToNextPage = () => {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
    };

    useEffect(() => {}, [currentPage]);

    useEffect(() => {
        const newGardenComponents = getGardenComponents();
        console.log(newGardenComponents);
    }, [gardenComponents]);

    return (
        <Wrapper className="GardenSecondWrapper">
            <WrapperTitleContainer className="WrapperTitleContainer">
                <WrapperTitle1>FROM OUR GARDEN</WrapperTitle1>
                <WrapperTitle2>심어둔 정원으로 이동하기!</WrapperTitle2>
            </WrapperTitleContainer>

            {/** TODO : 정원 배열 받고 반복 및 페이지네이션 처리 */}
            <WrapperGardenContainer className="WrapperGardenContainer">
                {gardenComponents.length > 0 &&
                    gardenComponents.map((gardenComponent) => {
                        return gardenComponent;
                    })}
            </WrapperGardenContainer>

            <PaginationContainer>
                <PaginationLeftArrow onClick={() => goToPrevPage()} />
                <PageNumber>{currentPage}</PageNumber>
                <PaginationRightArrow onClick={() => goToNextPage()} />
            </PaginationContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 92vw;
    height: 41vw;
    margin: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 0px #00000040;

    @media (max-width: 1280px) {
        margin-top: 70px;
        height: 600px;
        width: 1200px;
    }
`;

const WrapperTitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.5%;
    margin-bottom: 3.2%;

    @media (max-width: 1280px) {
        margin-bottom: 40px;
    }
`;

const WrapperTitle1 = styled.div`
    font-size: 1.25vw;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green05};

    @media (max-width: 1280px) {
        font-size: 15px;
    }
`;

const WrapperTitle2 = styled.div`
    font-size: 2.7vw;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green05};

    @media (max-width: 1280px) {
        font-size: 35px;
    }
`;

const WrapperGardenContainer = styled.div`
    width: 95%;
    height: 23vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1280px) {
        height: 500px;
    }
`;

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 1.5%;

    @media (max-width: 1280px) {
        margin-top: 40px;
        margin-bottom: 15px;
    }
`;

const PaginationLeftArrow = styled(IoIosArrowBack)`
    font-size: 25px;
    margin-right: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray};
`;

const PaginationRightArrow = styled(IoIosArrowForward)`
    font-size: 25px;
    margin-left: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray};
`;

const PageNumber = styled.div`
    color: ${({ theme }) => theme.colors.gray};
`;
