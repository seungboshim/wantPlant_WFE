import React, { useState } from "react";
import styled from "styled-components";
import GardenFirst from "./GardenFirst";
import GardenSecond from "./GardenSecond";
import EditGardenModal from "../../components/modal/EditGardenModal";
import AddTodoModal from "../../components/modal/AddTodoModal";
import EditTodoModal from "../../components/modal/EditTodoModal";

export default function GardenPage() {
  const [isEditGardenModalOpen, setIsEditGardenModalOpen] = useState(false);
  const [isAddTodoModalOpen, setIsAddTodoModalOpen] = useState(false);
  const [isEditTodoModalOpen, setIsEditTodoModalOpen] = useState(false);

  const EditGardenModalHandler = (isOpen) => {
    setIsEditGardenModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  };

  const AddTodoModalHandler = (isOpen) => {
    setIsAddTodoModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  };
  const EditTodoModalHandler = (isOpen) => {
    setIsEditTodoModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  };

  return (
    <Wrapper className="GardenPage_Wrapper">
      {/** TODO
       * 현재 garden_id가 무엇인지에 따라 서로 다른 정원 데이터 불러오기
       * id에 해당하는 건 First, 그 외는 Second
       */}
      <GardenFirst
        EditGardenModalHandler={EditGardenModalHandler}
        AddTodoModalHandler={AddTodoModalHandler}
        EditTodoModalHandler={EditTodoModalHandler}
      />
      <GardenSecond />
      <EditGardenModal
        isOpen={isEditGardenModalOpen}
        EditGardenModalHandler={EditGardenModalHandler}
      />
      <AddTodoModal
        isOpen={isAddTodoModalOpen}
        AddTodoModalHandler={AddTodoModalHandler}
      />
      <EditTodoModal
        isOpen={isEditTodoModalOpen}
        EditTodoModalHandler={EditTodoModalHandler}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
