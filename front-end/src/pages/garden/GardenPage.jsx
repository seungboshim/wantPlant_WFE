import React, { useState } from "react";
import styled from "styled-components";
import GardenFirst from "./GardenFirst";
import GardenSecond from "./GardenSecond";
import EditGardenModal from "../../components/modal/EditGardenModal";
import AddTodoGardenModal from "../../components/modal/AddTodoGardenModal";

export default function GardenPage() {
  const [isEditGardenModalOpen, setIsEditGardenModalOpen] = useState(false);
  const [isAddGardenModalOpen, setIsAddGardenModalOpen] = useState(false);

  const EditGardenModalHandler = (isOpen) => {
    setIsEditGardenModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  };

  const AddTodoGardenModalHandler = (isOpen) => {
    setIsAddGardenModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  };

  return (
    <Wrapper>
      {/** TODO
       * 현재 garden_id가 무엇인지에 따라 서로 다른 정원 데이터 불러오기
       * id에 해당하는 건 First, 그 외는 Second
       */}
      <GardenFirst
        EditGardenModalHandler={EditGardenModalHandler}
        AddTodoGardenModalHandler={AddTodoGardenModalHandler}
      />
      <GardenSecond />
      <EditGardenModal
        isOpen={isEditGardenModalOpen}
        EditGardenModalHandler={EditGardenModalHandler}
      />
      <AddTodoGardenModal
        isOpen={isAddGardenModalOpen}
        AddTodoGardenModalHandler={AddTodoGardenModalHandler}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1280px;
`;
