import { React, useState, useEffect } from "react";
import styled from "styled-components";
import PotCard from "../../components/bookContent/PotInform";
import { getCompletedPots } from "../../apis/pot/completedPot";


export default function BookPage(){
    const [completedPots, setData] = useState([]);
    
    useEffect(() => {
        getCompletedPots().then((pots) => {
            setData(pots);
        })
    }, [])

    console.log(completedPots)

    // TODO : 도감이 비어있을 때 구현
    // 카테고리에 따라 비어있는 뷰 구현해야 할 시엔 분리
    if (completedPots===undefined) {
        return (
            <Empty>정원을 생성해주세요</Empty>
        )
    } else {
        return (
            <Page>
                <Container>
                    <Layout>
                        <Label>공부</Label>
                        <Category>
                            {   
                                completedPots.map((pot) => {
                                    if(pot.gardenCategory === "STUDY"){
                                        return <PotCard
                                        potName={pot.potName} 
                                        gardenName={pot.gardenName} 
                                        startAt={pot.startAt} 
                                        completedAt={pot.completedAt} 
                                        potImgUrl={pot.potImgUrl} 
                                        todoTitle1={pot.todoTitle1} 
                                        todoTitle2={pot.todoTitle2}
                                        />
                                    }
                                })
                            }
                        </Category>
                        <Label>운동</Label>
                        <Category>
                            {
                                completedPots.map((pot) => {
                                    if(pot.gardenCategory === "EXERCISE"){
                                        return <PotCard
                                        potName={pot.potName} 
                                        gardenName={pot.gardenName} 
                                        startAt={pot.startAt} 
                                        completedAt={pot.completedAt} 
                                        potImgUrl={pot.potImgUrl} 
                                        todoTitle1={pot.todoTitle1} 
                                        todoTitle2={pot.todoTitle2}
                                        />
                                    }
                                })
                            }
                        </Category>
                        <Label>취미</Label>
                        <Category>
                            {
                                completedPots.map((pot) => {
                                    if(pot.gardenCategory === "HOBBY"){
                                        return <PotCard
                                        potName={pot.potName} 
                                        gardenName={pot.gardenName} 
                                        startAt={pot.startAt} 
                                        completedAt={pot.completedAt} 
                                        potImgUrl={pot.potImgUrl} 
                                        todoTitle1={pot.todoTitle1} 
                                        todoTitle2={pot.todoTitle2}
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
const Empty = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 1500px;
    background-color: ${({ theme }) => theme.colors.green01};
    font-size: 50px;
    font-weight: 400;
`