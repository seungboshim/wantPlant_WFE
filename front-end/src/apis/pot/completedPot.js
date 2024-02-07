import { Server } from "../setting";

export const getCompletedPots = async () => {
    try{
        const response = await Server.get("/api/completed-pots/web");
        console.log(response.data)
        return response.result.pots;
    }
    catch(error){
        console.log(error);
    }
}