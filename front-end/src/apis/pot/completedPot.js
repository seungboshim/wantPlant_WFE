import { Server } from "../setting";

export const CompletedPot = async () => {
    try {
        const response = await Server.get("/api/completed-pots/web");
        return response.result.pots;
    } catch (error) {
        console.log(error);
    }
};
