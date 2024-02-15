import { Server } from "../setting";

export const getEntireGardens = async() => {
    try {
        const response = await Server.get(`/api/gardens`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

export const getGardenById = async(gardenId) => {
    try {
        const response = await Server.get(`/api/gardens/${gardenId}`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** page size = 5로 됐지 왜 */
/** 정원+페이지네이션 조회, 카테고리 없이 */
export const getGardensWithPage = async({ page }) => {
    try {
        const response = await Server.get(`/api/gardens/page?page=${page}`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}
/** 정원+페이지네이션 조회, 카테고리 필터링 */
export const getGardensForCategoryWithPage = async({ page, category }) => {
    try {
        const response = await Server.get(`/api/gardens/page/category?page=${page}&gardenCategory=${category}`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}