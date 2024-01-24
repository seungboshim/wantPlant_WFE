import styled from "styled-components";

import GardenFirst from "./GardenFirst";
import GardenSecond from "./GardenSecond";

export default function StudyGardenPage() {
    return (
        <Wrapper>
            {/** TODO
             * 현재 garden_id가 무엇인지에 따라 서로 다른 정원 데이터 불러오기
             * id에 해당하는 건 First, 그 외는 Second
             */}
            <GardenFirst />
            <GardenSecond />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 1280px;
`