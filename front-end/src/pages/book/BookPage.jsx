import { React, useState, useEffect } from "react";
import styled from "styled-components";
import PotCard from "../../components/bookContent/PotInform";
import EmptyImage from "../../assets/images/emptyImage.svg";
import EmptyInform1 from "../../assets/images/emptyInform1.svg";
import EmptyInform2 from "../../assets/images/emptyInform2.svg";
import EmptyInform3 from "../../assets/images/emptyInform3.svg";
import { getCompletedPots } from "../../apis/pot/completedPot";

export default function BookPage() {
    const [completedPots, setData] = useState([]);

    useEffect(() => {
        getCompletedPots().then((pots) => {
            setData(pots);
        });
    }, []);

    console.log(completedPots);

    // TODO : 도감이 비어있을 때 구현
    // 카테고리에 따라 비어있는 뷰 구현해야 할 시엔 분리
    if (completedPots === undefined) {
        return (
            <Page>
                <Empty>
                    <img src={EmptyImage} width={240} height={160} alt="empty" />
                    <EmptyMessage>앗! 아직 완성된 화분이 없어요.</EmptyMessage>
                </Empty>
                <EmptyContainer>
                    <EmptyImageWrapper>
                        <img src={EmptyInform1} width={150} height={148} alt="empty" />
                        <MessageWrapper>
                            <Message1>
                                옆의 과정을 참고해서
                                <br /> 이쁜 화분을 피워보라냥
                            </Message1>
                            <Message2>🐾</Message2>
                        </MessageWrapper>
                    </EmptyImageWrapper>
                    <img src={EmptyInform3} width={550} height={780} alt="empty" />
                </EmptyContainer>
            </Page>
        );
    } else {
        return (
            <Page>
                <Container>
                    <Layout>
                        <Label>공부</Label>
                        <Category>
                            {completedPots.map((pot) => {
                                if (pot.gardenCategory === "STUDY") {
                                    return (
                                        <PotCard
                                            potName={pot.potName}
                                            gardenName={pot.gardenName}
                                            startAt={pot.startAt}
                                            completedAt={pot.completedAt}
                                            potImgUrl={pot.potImgUrl}
                                            todoTitle1={pot.todoTitle1}
                                            todoTitle2={pot.todoTitle2}
                                        />
                                    );
                                }
                            })}
                        </Category>
                        <Label>운동</Label>
                        <Category>
                            {completedPots.map((pot) => {
                                if (pot.gardenCategory === "EXERCISE") {
                                    return (
                                        <PotCard
                                            potName={pot.potName}
                                            gardenName={pot.gardenName}
                                            startAt={pot.startAt}
                                            completedAt={pot.completedAt}
                                            potImgUrl={pot.potImgUrl}
                                            todoTitle1={pot.todoTitle1}
                                            todoTitle2={pot.todoTitle2}
                                        />
                                    );
                                }
                            })}
                        </Category>
                        <Label>취미</Label>
                        <Category>
                            {completedPots.map((pot) => {
                                if (pot.gardenCategory === "HOBBY") {
                                    return (
                                        <PotCard
                                            potName={pot.potName}
                                            gardenName={pot.gardenName}
                                            startAt={pot.startAt}
                                            completedAt={pot.completedAt}
                                            potImgUrl={pot.potImgUrl}
                                            todoTitle1={pot.todoTitle1}
                                            todoTitle2={pot.todoTitle2}
                                        />
                                    );
                                }
                            })}
                        </Category>
                    </Layout>
                </Container>
            </Page>
        );
    }
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1500px;
    background-color: ${({ theme }) => theme.colors.green01};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 92%;
`;
const Layout = styled.div`
    width: 90%;
    height: 70%;
`;
const Label = styled.p`
    width: 100%;
    height: 5%;
    font-weight: 200;
    font-size: 30px;
`;
const Category = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 18%;
    margin-top: 4%;
    margin-bottom: 16%;
    gap: 5%;
`;
const Empty = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    height: 20%;
    background-color: ${({ theme }) => theme.colors.green01};
    margin-top: 10%;
`;
const EmptyMessage = styled.p`
    font-size: 30px;
    font-weight: 500;
`;
const EmptyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
    height: 55%;
    background-color: #ffffff;
    border-radius: 150px;
    margin-top: 10%;
`;
const EmptyImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 35%;
    margin-left: 10%;
    margin-right: 5%;
`;
const MessageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 33%;
`;
const Message1 = styled.p`
    font-size: 26px;
    font-weight: 700;
    width: 85%;
    text-align: center;
`;
const Message2 = styled.p`
    display: flex;
    width: 15%;
    height: 60%;
    font-size: 46px;
    font-weight: 700;
`;
