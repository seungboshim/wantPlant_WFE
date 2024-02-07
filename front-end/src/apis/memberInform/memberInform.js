import { Server } from "../setting";

export const getMemberInform = async ({memberId}) => {
    try{
        const response = await Server.get(`/api/members?memberId=${memberId}`);
        console.log(response.data)
        return response.result;
    }
    catch(error){
        console.log(error);
    }
}