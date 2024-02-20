import React from "react";
// import { AiFillEdit } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import gardenBackground from "../../assets/images/gardenBackground.svg"

/** 다른 정원 가기 Box */
export default function GardenBox({ garden_id, garden_title, garden_category, garden_description, potList }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/garden/${garden_id}`)
    }

    return (
        <StyledGardenBox className="GardenBox" onClick={handleClick}>
            <GardenBoxContentContainer>
                <GardenBoxImageContaier>
                    {potList.map((pot, idx) => {
                        return <GardenBoxImage key={idx} img_url={pot.potImageUrl}></GardenBoxImage>;
                    })}
                </GardenBoxImageContaier>
                <GardenBoxTextContainer>
                    <GardenBoxContentTitleContainer>
                        <GardenBoxContentTitle>
                            {garden_title}
                            {/* <GardenBoxContentTitleIcon /> */}
                        </GardenBoxContentTitle>
                        <GardenBoxContentCategoryWrapper>
                            <GardenBoxContentCategoryText>
                                {garden_category}
                            </GardenBoxContentCategoryText>
                        </GardenBoxContentCategoryWrapper>
                    </GardenBoxContentTitleContainer>
                    <GardenBoxContentDesContainer>
                        {garden_description}
                    </GardenBoxContentDesContainer>
                </GardenBoxTextContainer>
            </GardenBoxContentContainer>
        </StyledGardenBox>
    );
}

const StyledGardenBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.strokeGray};
    margin: 0 1.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.3s;
    cursor: pointer;

    @media (max-width: 1280px) {
        width: 360px;
        height: 360px;
        border-radius: 10px;
        margin: 0 10px;
    }

    &:hover {
        box-shadow: 0px 0px 10px 0px ${({theme}) => theme.colors.strokeGray}
    }
`;

const GardenBoxContentContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const GardenBoxImageContaier = styled.div`
    width: 100%;
    height: 41%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.pink02};
    background-color: ${({ theme }) => theme.colors.pink02};
    background-image: url(${gardenBackground}); // 변경된 부분
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const GardenBoxImage = styled.div`
    width: 20%;
    height: 80%;
    margin: 3%;
    background: url(${(props) => props.img_url}) no-repeat center;
    background-size: contain;
`;

const GardenBoxTextContainer = styled.div`
    padding: 15px;
`

const GardenBoxContentTitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const GardenBoxContentTitle = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 1vw;
    @media (max-width: 1280px) {
        font-size: 14px;
    }
`;

// const GardenBoxContentTitleIcon = styled(AiFillEdit)`
//   position: relative;
//   top: 4px;
//   left: 2px;
//   font-size: 1vw;
//   color: ${({ theme }) => theme.colors.strokeGray};

//   @media (max-width: 1280px) {
//     font-size: 14px;
//   }
// `;

const GardenBoxContentCategoryWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0 15px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.colors.green02};
`

const GardenBoxContentCategoryText = styled.div`
    font-size: 1vw;
    padding: 6px 8px;
    @media (max-width: 1280px) {
        font-size: 14px;
    }
`;

const GardenBoxContentDesContainer = styled.div`
    width: 100%;
    height: 10%;
    font-size: 1vw;

    @media (max-width: 1280px) {
        font-size: 14px;
    }
`;
