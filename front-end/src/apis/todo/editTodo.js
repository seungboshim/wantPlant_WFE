import { Server } from "../setting";


/** 투두 생성 */
export const postTodo = async({ goalId, title, date, time }) => {
    try {
        const response = await Server.post(`/apis/todos`, {
            "goalId": goalId,
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
        const response = await Server.delete(`/apis/todos/${todoId}`)
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 투두 완료여부 */
export const patchTodoComplete = async({ todoId, isCompleted }) => {
    try {
        const response = await Server.patch(`/apis/todos/${todoId}`, {
            "isCompleted": isCompleted,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

/** 투두 수정 */
export const patchTodoData = async({ todoId, title, date, time }) => {
    try {
        const response = await Server.patch(`/apis/todos/${todoId}`, {
            "title": title,
            "date": date,
            "time": time,
        })
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}