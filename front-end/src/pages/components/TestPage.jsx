import styled from "styled-components";
import PotTagItem from "../../components/tag/PotTagItem";
import TodoTagItem from "../../components/tag/TodoTagItem";
import ScheduleTagItem from "../../components/tag/ScheduleTagItem";
import NewGardenBox from '../../components/gardenContent/NewGardenBox';
import PotCreate from "../../components/gardenContent/PotCreate";

import { getPotsForPage } from '../../apis/pot/pots';
import { useState, useEffect } from "react";

export default function TestPage() {
    const [potsForPage, setPotsForPage] = useState([]);


    useEffect(() => {
        getPotsForPage({gardenId:1, page:1}).then((pots) => {
            setPotsForPage(pots);
            console.log(pots);
        })
    }, [])
    return (
        <Container>
            <span></span>
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    height: 566px;
    background-color: white;
    border-radius: 32px;
    border: 1px solid black;
`