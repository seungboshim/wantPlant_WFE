import styled from "styled-components";
import green05Plus from "../../assets/images/green05Plus.svg";

/** 빈 화분 */
export default function EmptyPotItem({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Wrapper>
        <Plus src={green05Plus} alt="plus" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px dashed black;
  width: 100%;
  height: 20%;
  border-radius: 2.5vw;

  @media (max-width: 1280px) {
    height: 120px;
    border-radius: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    margin: 10px;
  }
`;

const Plus = styled.img`
  width: 2vw;
  height: 2vw;
  opacity: 0;
  transition: opacity 0.25s;

  @media (max-width: 1280px) {
    width: 28px;
    height: 28px;
  }

  ${Container}:hover & {
    opacity: 1;
  }
`