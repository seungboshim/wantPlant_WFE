import {React, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import PotCard from "../../components/bookContent/PotInform";
import CompletedPot from "../../apis/pot/completedPot";


export default function BookPage(){
    const [completedPots, setData] = useState([]);
    
    setData(CompletedPot);

    return(
        <Page>
            <Container>
                <Layout>
                    <Label>공부</Label>
                    <Category>
                        {   
                            completedPots.map((pot) => {
                                if(pot.gardenCategory == "STUDY"){
                                    return <PotCard
                                    potName={pot.potName} 
                                    gardenName={pot.gardenName} 
                                    startAt={pot.startAt} 
                                    completedAt={pot.completedAt} 
                                    potImgUrl={pot.potImgUrl} 
                                    todoTitle1={todoTitle1} 
                                    todoTitle2={todoTitle2}
                                    />
                                }
                            })
                        }
                    </Category>
                    <Label>운동</Label>
                    <Category>
                        {
                            completedPots.map((pot) => {
                                if(pot.gardenCategory == "EXERCISE"){
                                    return <PotCard
                                    potName={pot.potName} 
                                    gardenName={pot.gardenName} 
                                    startAt={pot.startAt} 
                                    completedAt={pot.completedAt} 
                                    potImgUrl={pot.potImgUrl} 
                                    todoTitle1={todoTitle1} 
                                    todoTitle2={todoTitle2}
                                    />
                                }
                            })
                        }
                    </Category>
                    <Label>취미</Label>
                    <Category>
                        {
                            completedPots.map((pot) => {
                                if(pot.gardenCategory == "HOBBY"){
                                    return <PotCard
                                    potName={pot.potName} 
                                    gardenName={pot.gardenName} 
                                    startAt={pot.startAt} 
                                    completedAt={pot.completedAt} 
                                    potImgUrl={pot.potImgUrl} 
                                    todoTitle1={todoTitle1} 
                                    todoTitle2={todoTitle2}
                                    />
                                }
                            })
                        }
                    </Category>
                </Layout>
            </Container>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 1500px;
    background-color: ${({ theme }) => theme.colors.green01};
`

const Container = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 92%;
`
const Layout = styled.div`
    width: 90%;
    height: 70%;
`
const Label = styled.p`
    width: 100%;
    height: 5%;
    font-weight: 200;
    font-size: 30px;
`
const Category = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 18%;
    margin-top: 4%;
    margin-bottom: 16%;
    gap: 5%;
`