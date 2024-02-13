import { Server } from "../setting";


/** 화분 생성 */
export const postPot = async({ gardenId, potName, potTageColor, startAt }) => {
    try {
        const response = await Server.post(`/api/pots`, {
            "gardenId": gardenId,
            "potName": potName,
            "potTageColor": potTageColor,
            "startAt": startAt,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 화분 수정 */
export const patchPot = async({ potId, potName }) => {
    try {
        const response = await Server.put(`/api/pots/${potId}`, {
            "potName": potName,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 화분 삭제 */
export const deletePot = async({ potId }) => {
    try {
        const response = await Server.delete(`/api/pots/${potId}`)
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}