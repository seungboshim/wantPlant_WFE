import styled from "styled-components";

/** 빈 화분 */
export default function EmptyPotItem() {
  return (
    <Container>
      <Wrapper>{/** TODO : 아이콘 넣기, onClick으로 새 화분 추가 */}</Wrapper>
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

  @media (max-width: 1280px) {
    margin: 10px;
  }
`;
