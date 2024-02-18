import { Server } from "../setting";

/** gardenId, page번호를 받아 화분 정보 GET */
export const getPotsWithPage = async ({ gardenId, page }) => {
    try {
        const response = await Server.get(`/api/pots?gardenId=${gardenId}&page=${page}`) // 쿼리 스트링은 이렇게 쓰면 됩니다
        return response.data.result.pots;
    } catch (error) {
        console.log(error);
    }
}

/** potId 받아 특정 화분 조회 */
export const getPotById = async({ potId }) => {
    try {
        const response = await Server.get(`/api/pots/${potId}`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** gardenId 받아 정원의 모든 화분 이미지 조회 */
export const getPotImages = async ({ gardenId }) => {
    try {
        const response = await Server.get(`/api/pots?gardenId=${gardenId}`) // 쿼리 스트링은 이렇게 쓰면 됩니다
        return response.data.result.potImages;
    } catch (error) {
        console.log(error);
    }
}