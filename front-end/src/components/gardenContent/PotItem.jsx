import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

/** 화분 데이터를 인자로 받는 화분 컴포넌트 */
export default function PotItem({
  pot_title,
  period,
  pot_type,
  pot_img,
  progress,
}) {
  // TODO : onClick으로 투두 컴포넌트 불러오기
  return (
    <Container className="PotItemContainer">
      <Wrapper>
        <img src={logo} alt="화분" />
        <PotInfoWrapper className="PotInfoWrapper">
          <PotPeriod className="PotPeriod">{period}</PotPeriod>
          <PotTitle className="PotTitle">{pot_title}</PotTitle>
          <PotProgressWrapper className="PotProgressWrapper">
            <PotProgressBar className="PotProgressBar">
              <PotProgressDealt width={progress} color={pot_type} />
            </PotProgressBar>
            <PotProgressText color={pot_type}>{progress}%</PotProgressText>
          </PotProgressWrapper>
        </PotInfoWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: white;
  border-radius: 32px;
  margin-bottom: 1%;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 2%;
  width: 100%;
`;

const PotInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 3%;
  flex-grow: 1;
`;

const PotPeriod = styled.span`
  font-size: 1vw;
  margin-bottom: 0.4%;
`;

const PotTitle = styled.span`
  font-size: 2vw;
  font-weight: 1000;
`;

const PotProgressWrapper = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-between;
  margin-top: 1%;
  align-items: center;
`;

const PotProgressBar = styled.div`
  width: 80%;
  height: 55%;
  border: 2px solid #bdbdbd;
  border-radius: 12px;
`;

const PotProgressDealt = styled.div`
  width: ${({ width }) => width}%;
  height: 100%;
  border-radius: 12px;
  background-color: ${({ color, theme }) => theme.colors[color].bg};
`;

const PotProgressText = styled.span`
  font-size: 3vw;
  width: 20%;
  text-align: end;
  color: ${({ color, theme }) => theme.colors[color].text};
`;
