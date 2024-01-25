import styled from "styled-components";
import { useState } from "react";
import { gardens, pots, goals } from "../../apis/dummy/gardens";

/** 새 화분 생성 컴포넌트 */
export default function TodoView({ pot_id }) {
    const potTypes = ["potPurple", "potGreen", "potRed", "potOrange", "potBlue", "potPink"];

    
    return (   
        <Wrapper>
            <Container>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Container = styled.div`
    margin: 40px 52px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.span`
    font-size: 20px;
    font-weight: 500;
`

const PotInputContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PotTitleInput = styled.input`
    width: -webkit-fill-available;
    font-size: 18px;
    padding: 16px;
    border: 1px solid ${({theme}) => theme.colors.strokeGray};
    border-radius: 15px;
`

const PotColorSelectionWrapper = styled.div`
    width: -webkit-fill-available;
    font-size: 18px;
    margin-top: 20px;
    height: 124px;
    border: 1px solid ${({theme}) => theme.colors.strokeGray};
    border-radius: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PotColorSelectionTitle = styled.span`
    
`

const PotColorSelectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`

const PotCreateButton = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
`
