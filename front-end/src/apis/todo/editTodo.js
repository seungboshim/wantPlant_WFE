import { Server } from "../setting";


/** 투두 생성 */
export const postTodo = async({ goalId, title, date, time }) => {
    try {
        const response = await Server.post(`/api/todos`, {
            "goalID": goalId,
            "title": title,
            "date": date,
            "time": time,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 투두 삭제 */
export const deleteTodo = async({ todoId }) => {
    try {
        const response = await Server.delete(`/api/todos/${todoId}`)
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 투두 완료여부 */
export const patchTodoComplete = async( todoId, isComplete ) => {
    try {
        const response = await Server.patch(`/api/todos/${todoId}`, {
            "isComplete": isComplete,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 투두 수정 */
export const patchTodoData = async({ todoId, title, date, time }) => {
    try {
        const response = await Server.patch(`/api/todos/${todoId}`, {
            "title": title,
            "date": date,
            "time": time,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}