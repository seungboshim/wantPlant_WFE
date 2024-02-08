import { Server } from "../setting";

export const getMemberInform = async ({memberId}) => {
    try{
        const response = await Server.get(`/api/members/${memberId}`);
        console.log(response.data)
        return response.data.result;
    }
    catch(error){
        console.log(error);
    }
}