import React, { useState } from "react";
import styled from "styled-components";
import GardenFirst from "./GardenFirst";
import GardenSecond from "./GardenSecond";
import EditGardenModal from "../../components/modal/EditGardenModal";

export default function GardenPage() {
  const [isEditGardenModalOpen, setIsEditGardenModalOpen] = useState(false);

  const EditGardenModalHandler = (isOpen) => {
    setIsEditGardenModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  };

  return (
    <Wrapper>
      {/** TODO
       * 현재 garden_id가 무엇인지에 따라 서로 다른 정원 데이터 불러오기
       * id에 해당하는 건 First, 그 외는 Second
       */}
      <GardenFirst EditGardenModalHandler={EditGardenModalHandler} />
      <GardenSecond />
      <EditGardenModal
        isOpen={isEditGardenModalOpen}
        EditGardenModalHandler={EditGardenModalHandler}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1280px;
`;
