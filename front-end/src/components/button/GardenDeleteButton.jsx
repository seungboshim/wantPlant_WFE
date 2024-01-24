import styled from "styled-components";

/** green 05 버튼 */
export default function GardenDeleteButton({ label, onClick }) {
  return <Wrapper onClick={onClick}>{label}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 1.2vw;
  color: white;
  background-color: ${({ theme }) => theme.colors.green05};
  border-radius: 15px;
  padding: 1.5%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
