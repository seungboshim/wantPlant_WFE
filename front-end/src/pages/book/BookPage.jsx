import {React} from "react";
import styled from "styled-components";

import PotCard from "../../components/bookContent/PotInform";


export default function BookPage(){

    return(
        <Page>
            <Container>
                <Layout>
                    <Label>카테고리</Label>
                    <Category>
                        <PotCard/>
                        <PotCard/>
                        <PotCard/>
                    </Category>
                    <Label>카테고리</Label>
                    <Category>
                        <PotCard/>
                        <PotCard/>
                        <PotCard/>
                    </Category>
                    <Label>카테고리</Label>
                    <Category>
                        <PotCard/>
                        <PotCard/>
                        <PotCard/>
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