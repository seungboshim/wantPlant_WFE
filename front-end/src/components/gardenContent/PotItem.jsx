import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

/** 화분 데이터를 인자로 받는 화분 컴포넌트 */
export default function PotItem({ 
  potName, period, proceed, potImage, potColor
}) {
    // TODO : onClick으로 투두 컴포넌트 불러오기
    return (
        <Container className="PotItemContainer">
            <Wrapper>
              {/** TODO : potImage 받아오기 */}
                <img src={logo} alt="화분"/>
                <PotInfoWrapper className="PotInfoWrapper">
                    <PotPeriod className="PotPeriod">{period}</PotPeriod>
                    <PotTitle className="PotTitle">{potName}</PotTitle>
                    <PotProgressWrapper className="PotProgressWrapper">
                        <PotProgressBar className="PotProgressBar">
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
  height: 23%;
  margin-bottom: 4%;
  background-color: white;
  border-radius: 2vw;
  @media (max-width: 1280px) {
    height: 120px;
    border-radius: 32px;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 2%;
  width: 100%;
  @media (max-width: 1280px) {
    margin: 10px;
  }
`;

const PotInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 3%;
  flex-grow: 1;
  @media (max-width: 1280px) {
    margin-left: 20px;
  }
`;

const PotPeriod = styled.span`
  font-size: 1vw;
  margin-bottom: 0.4%;
  @media (max-width: 1280px) {
    font-size: 12px;
    margin-bottom: 4px;
  }
`;

const PotTitle = styled.span`
  font-size: 1.8vw;
  font-weight: 500;
  @media (max-width: 1280px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

const PotProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1%;
  align-items: center;
  @media (max-width: 1280px) {
    margin-top: 8px;
  }
`;

const PotProgressBar = styled.div`
  width: 80%;
  height: 55%;
  border: 2px solid #bdbdbd;
  border-radius: 1.5vw;
  @media (max-width: 1280px) {
    height: 20px;
    border-radius: 12px;
  }
`;

const PotProgressDealt = styled.div`
  width: ${({width}) => width*10}%;
  height: 100%;
  border-radius: 1.5vw;
  background-color: ${({ color, theme }) => theme.colors[color].bg};
  @media (max-width: 1280px) {
    border-radius: 12px;
  }
`;

const PotProgressText = styled.span`
  font-size: 2vw;
  text-align: end;
  color: ${({ color, theme }) => theme.colors[color].text};
  @media (max-width: 1280px) {
    font-size: 24px;
  }
`;
