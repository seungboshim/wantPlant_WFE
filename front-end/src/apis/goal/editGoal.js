import { Server } from "../setting";


/** 목표 생성 */
export const postGoal = async( potId, goalTitle ) => {
    try {
        const response = await Server.post(`/api/goals`, {
            "potId": potId,
            "goalTitle": goalTitle
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 목표+투두 생성 */
export const postGoalAndTodo = async({ potId, goalTitle, todoTitle, date, time }) => {
    try {
        const response = await Server.post(`/api/goals/todos`, {
            "potId": potId,
            "goalTitle": goalTitle,
            "todo": {
              "todoTitle": todoTitle,
              "date": date,
              "time": time
            }
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 목표 삭제 */
export const deleteGoal = async({ goalId }) => {
    try {
        const response = await Server.delete(`/api/goals/${goalId}`)
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 목표 수정 */
export const patchGoal = async({ goalId, goalTitle }) => {
    try {
        const response = await Server.patch(`/api/goals`, {
            "goalId": goalId,
            "goalTitle": goalTitle
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}