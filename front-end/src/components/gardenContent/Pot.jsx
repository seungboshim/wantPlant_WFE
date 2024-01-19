import styled from "styled-components";
import logo from "../../assets/images/logo.svg"

export default function Pot() {
    return (
        <Container>
            <Wrapper>
                <img src={logo} alt="화분"/>
                <PotInfoWrapper>
                    <PotPeriod>진행기간</PotPeriod>
                    <PotTitle>화분이름</PotTitle>
                    <PotProgressWrapper>
                        <PotProgressBar />
                        <PotProgressText>100%</PotProgressText>
                    </PotProgressWrapper>
                </PotInfoWrapper>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    background-color: white;
    border-radius: 32px;
`

const Wrapper = styled.div`
    display: flex;
    margin: 20px;
    width: 100%;
`

const PotInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 20px;
    flex-grow: 1;
`

const PotPeriod = styled.span`
    font-size: 12px;
    margin-bottom: 4px;
`

const PotTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
`

const PotProgressWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    align-items: center;
`

const PotProgressBar = styled.div`
    width: 80%;
    height: 20px;
    border: 1px solid grey;
    border-radius: 12px;
`

const PotProgressText = styled.span`
    font-size: 24px;
    width: 20%;
    text-align: end;
`
