import { Server } from "../setting";

export const getMemberInform = async () => {
    try{
        const response = await Server.get(`/api/members`);
        console.log(response.data)
        return response.data.result;
    }
    catch(error){
        console.log(error);
    }
}