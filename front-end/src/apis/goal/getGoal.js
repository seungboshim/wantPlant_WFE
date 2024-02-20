import { Server } from "../setting";

/** 화분 당 goalList, todoList 반환 */
export const getGoalsByPotId = async ( potId ) => {
    try {
        const response = await Server.get(`/api/goals/todos?potId=${potId}`) // 쿼리 스트링은 이렇게 쓰면 됩니다
        return response.data.result.goalList;
    } catch (error) {
        console.log(error);
    }
}

