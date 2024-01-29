import styled from "styled-components";
import axios from "axios";

export default function PotInform(){
    
    return(
        <Pot>
            <Layout>
                <Info>
                    <PotName>화분 이름</PotName>
                    <GardenName>정원 이름</GardenName>
                    <Period>소요 기간</Period>
                    <Record>20xx.xx.xx ~ 20xx.xx.xx</Record>
                    <List>
                        <Summary>물 줬던 기록 요약</Summary>
                        <Summary>물 줬던 기록 요약</Summary>
                    </List>
                </Info>
                <Image>
                    <Img>
                        <img width={"100%"} height={"100%"}></img>
                    </Img>
                    <Name>화분 이름/꽃말</Name>
                </Image>
            </Layout>
        </Pot>
    )
}

const Pot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    border-radius: 2%;
    background-color: #FFFFFF;
`
const Layout = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 80%;
    gap: 20%;
`
const Info = styled.div`
    width: 40%;
    height: 100%;
`
const PotName = styled.p`
    width: 100%;
    height: 15%;
    font-size: 15px;
    margin-top: 0%;
    margin-bottom: 0%;
`
const GardenName = styled.p`
    width: 100%;
    height: 10%;
    font-size: 10px;
    margin-top: 5%;
`
const Period = styled.p`
    width: 100%;
    height: 8%;
    font-size: 8px;
    margin-bottom: 0%;
`
const Record = styled.p`
    width: 100%;
    height: 8%;
    font-size: 8px;
    margin-top: 2%;
`
const List = styled.div`
    width:100%;
    height: 20%;
    margin-top: 10%;
`
    
const Summary = styled.li`
    width:100%;
    height: 50%;
    font-size: 8px;
`
const Image = styled.div`
    width: 40%;
    height: 100%;
`
const Img = styled.div`
    width: 100%;
    height: 90%;
`
const Name = styled.p`
    text-align: center;
    font-size: 8px;
    width: 100%;
    height: 8%;
    margin-top: 2%;
`