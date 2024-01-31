import { useEffect, useState } from "react";
import { Server } from "../setting";

/** gardenId, page번호를 받아 화분 정보 GET */
export const getPotsForPage = async ({ gardenId, page }) => {
    const response = await Server.get(`/pots?gardenId=${gardenId}&page=${page}`)
    console.log(response)
    return response.result.pots;
}

// // GET 사용 방법

// import {getPotsForPage} from ~

// const [potsForPage, setPotsForPage] = useState([]);

// // 각 API에 맞는 인자를 넣고, 리턴된 값인 pots를 potsForPage에 저장

// useEffect(() => {
//     getPotsForPage({gardenId, page}).then((pots) => {
//         setPotsForPage(pots);
//     })
// }, [])
