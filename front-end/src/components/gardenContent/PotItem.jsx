import styled from "styled-components";
import logo from "../../assets/images/logo.svg"

/** 화분 데이터를 인자로 받는 화분 컴포넌트 */
export default function PotItem({ pot_title, period, pot_type, pot_img, progress }) {
    // TODO : onClick으로 투두 컴포넌트 불러오기
    return (
        <Container>
            <Wrapper>
                <img src={logo} alt="화분"/>
                <PotInfoWrapper>
                    <PotPeriod>{period}</PotPeriod>
                    <PotTitle>{pot_title}</PotTitle>
                    <PotProgressWrapper>
                        <PotProgressBar>
                            <PotProgressDealt width={progress} color={pot_type}/>
                        </PotProgressBar>
                        <PotProgressText color={pot_type}>{progress}%</PotProgressText>
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
    width: ${({width}) => width}%;
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
