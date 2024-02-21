import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

/** 화분 데이터를 인자로 받는 화분 컴포넌트 */
export default function PotItem({ 
  potName, startAt, proceed, potImageUrl, potTagColor, selected, onClick
}) {
    return (
        <Container selected={selected} className="PotItemContainer" onClick={onClick}>
            <Wrapper>
                <PotImage src={potImageUrl} alt="화분"/>
                <PotInfoWrapper className="PotInfoWrapper">
                    <PotPeriod className="PotPeriod">{startAt}</PotPeriod>
                    <PotTitle className="PotTitle">{potName}</PotTitle>
                    <PotProgressWrapper className="PotProgressWrapper">
                        <PotProgressBar className="PotProgressBar">
                            <PotProgressDealt width={proceed} color={potTagColor}/>
                        </PotProgressBar>
                        <PotProgressText color={potTagColor}>{proceed}/30</PotProgressText>
                    </PotProgressWrapper>
                </PotInfoWrapper>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: white;
  border-radius: 2.5vw;
  border: ${({selected, theme}) => 
    selected ? `1px solid ${theme.colors.strokeGray}` : '1px solid white'
  };
  box-shadow: ${({selected, theme}) => {
    if (selected) {
      return `0px 0px 10px 0px ${theme.colors.strokeGray}`
    } else {
      return 'none'
    }
  }};
  transition: box-shadow 0.3s;

  @media (max-width: 1280px) {
    height: 120px;
    border-radius: 32px;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px ${({theme}) => theme.colors.strokeGray}
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 2%;
  width: 100%;
  @media (max-width: 1280px) {
    padding: 10px;
  }
`;

const PotImage = styled.img`
  height: auto;
  @media (max-width: 1280px) {
    height: 100px;
  }
`

const PotInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 4.3%;
  flex-grow: 1;
  justify-content: center;
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
  margin-right: 1%;
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
  width: ${({width}) => width*10/3}%;
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
