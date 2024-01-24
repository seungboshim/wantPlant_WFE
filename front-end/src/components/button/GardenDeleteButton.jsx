import styled from "styled-components";

/** 정원삭제 버튼 : green05-white, radius15 */
export default function GardenDeleteButton({ label, onClick }) {
  return <Wrapper onClick={onClick}>{label}</Wrapper>;
}

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 1.5%;
  width: 100%;
  height: 100%;
  font-size: 1.2vw;

  @media (max-width: 1280px) {
    font-size: 16px;
    border-radius: 15px;
    padding: 4px;
    width: 100px;
    height: 20px;
  }
  color: white;
  background-color: ${({ theme }) => theme.colors.green05};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
