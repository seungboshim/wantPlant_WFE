import { Server } from "../setting";


/** 정원 생성, gardenId 리턴함 */
export const postGarden = async({ name, description, category }) => {
    try {
        const response = await Server.post(`/apis/gardens`, {
            "name": name,
            "description": description,
            "category": category
        })
        return response.data.result.gardenId;
    } catch (error) {
        console.log(error);
    }
}

/** 정원 수정, gardenId 리턴함 */
export const putGarden = async({ gardenId, name, description }) => {
    try {
        const response = await Server.put(`/apis/gardens`, {
            "gardenId": gardenId,
            "name": name,
            "description": description,
        })
        return response.data.result.gardenId;
    } catch (error) {
        console.log(error);
    }
}

/** 정원 삭제 */
export const deleteGarden = async({ gardenId }) => {
    try {
        const response = await Server.delete(`/apis/gardens/${gardenId}`)
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}