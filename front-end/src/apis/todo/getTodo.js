import { Server } from "../setting";

export const getEntireTodos = async() => {
    try {
        const response = await Server.get(`/api/todos`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}

export const getTodoById = async( todoId ) => {
    try {
        const response = await Server.get(`/api/todos/${todoId}`);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
}