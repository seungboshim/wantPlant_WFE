import React from "react";
import {useState, useEffect} from "react";
import styled from "styled-components";

import ClickHandler from "../../components/makeGardenContent/ClickHandler";
import Input from "../../components/makeGardenContent/Input";
import { ReactComponent as DogCloud } from "../../assets/images/dogcat_cloud.svg";
import ModalButton from '../../components/button/ModalButton';
import ReverseModalButton from '../../components/button/ReverseModalButton';
import { postGarden } from "../../apis/garden/editGarden";
import { useNavigate } from "react-router-dom";

import { useSetRecoilState } from 'recoil';
import { InitGardenAtom, IsLoggedInAtom } from "../../recoil/atom";
import { getEntireGardens } from "../../apis/garden/getGarden";

/** 정원 생성 페이지 */
export default function MakeGardenPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedCategory, setCategory] = useState("STUDY");
    const navigate = useNavigate();

    const setInitGarden = useSetRecoilState(InitGardenAtom);
    const [entireGardens, setEntireGardens] = useState(0);

    const setIsLoggedInAtom = useSetRecoilState(IsLoggedInAtom);

    useEffect(() => {
        const fetchEntireGardens = async() => {
            try {
                const garden = await getEntireGardens();
                setEntireGardens(garden);
                setIsLoggedInAtom(true);
            } catch (error) {
                console.log(error);
            }
        }
        fetchEntireGardens();
    }, [])

    const handleTitle = (e) => {
        const text = e.target.value;
        setTitle(text);
    }

    const handleDescription = (e) => {
        const text = e.target.value;
        setDescription(text);
    }

    /** 정원 생성 후, 생성한 정원으로 라우팅 */
    const handleSubmit = async() => {
        const gardenId = await postGarden({
            "name": title, 
            "description": description, 
            "category": selectedCategory
        });

        navigate(`/garden/${gardenId}`)
    }

    /** 취소 누를때 */
    const handleQuit = () => {
        if (entireGardens.totalElements === 0) {
            alert("정원을 생성해주세요.");
            navigate("/garden/add");
        } else {
            const gardenIndex = entireGardens.gardens[0].gardenId;
            setInitGarden(gardenIndex);
            navigate(`/garden/${gardenIndex}`);
        }
    }

    return (
        <Layout>
            <DogCloud/>
            <Category>
                <Title>
                    키워갈 정원을 선택해주세요!
                </Title>
                <ClickHandler setCategory={setCategory}/>
            </Category>
            <InputContainer>
                <Input onChange={handleTitle} value={title} placeholder={"정원 이름을 적어주세요."} />
                <Input onChange={handleDescription} value={description} placeholder={"정원에 대한 설명을 작성해주세요."} />
            </InputContainer>
            <ButtonContainer>
                <ModalButton label="확인" onClick={handleSubmit}/>
                <ReverseModalButton label="취소" onClick={handleQuit}/>
            </ButtonContainer>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    background: ${({ theme }) => theme.colors.green01};
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    margin: 3%;
`
const Title = styled.span`
    font-size: 42px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 3%;
`

// const Subject = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 428px;
//     height: 50px;
//     gap: 40px;
// `
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin-top: 15px;
`