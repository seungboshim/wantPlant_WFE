import styled from "styled-components";
import logo from "../../assets/images/logo.svg"

/** 화분 데이터를 인자로 받는 화분 컴포넌트 */
export default function PotItem({ potName, period, proceed, potImage, potColor }) {
    // TODO : onClick으로 투두 컴포넌트 불러오기
    return (
        <Container>
            <Wrapper>
                {/** TODO : potImage 받아오기 */}
                <img src={logo} alt="화분"/>
                <PotInfoWrapper>
                    <PotPeriod>{period}</PotPeriod>
                    <PotTitle>{potName}</PotTitle>
                    <PotProgressWrapper>
                        <PotProgressBar>
                            <PotProgressDealt width={proceed} color={potColor}/>
                        </PotProgressBar>
                        <PotProgressText color={potColor}>{proceed}/10</PotProgressText>
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
    border: 2px solid #BDBDBD;
    border-radius: 12px;
`

const PotProgressDealt = styled.div`
    width: ${({width}) => width*10}%;
    height: 100%;
    border-radius: 12px;
    background-color: ${({color, theme}) => theme.colors[color].bg};
`

const PotProgressText = styled.span`
    font-size: 24px;
    width: 20%;
    text-align: end;
    color: ${({color, theme}) => theme.colors[color].text}
`
