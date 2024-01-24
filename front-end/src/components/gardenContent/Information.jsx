import styled from "styled-components";

/** 정원에 화분이 없을 때 노출되는 설명 컴포넌트 */
export default function Information() {
    return (
        <Container>
            <Title>정원 이용 안내🪴</Title>
            <ExplanationWrapper>
                <Explanation>왼쪽의 + 버튼을 클릭하여 첫 화분을 만들어주세요!</Explanation>
                <Explanation>3개의 고정된 카테고리 안에 정원을 생성할 수 있으며,<br></br>
                    각 정원을 꾸미기 위한 화분도 생성할 수 있습니다!</Explanation>
                <Explanation>각 화분을 채우기 위해<br></br>
                    투두리스트를 완료할 때마다 화분에 물을 줄 수 있어요!<br></br>
                    100%가 채워지면 화분 도감 페이지로 이동됩니다 :)</Explanation>
                <Explanation>준비가 완료됐다면 + 버튼을 눌러 시작해주세요!</Explanation>
                <Explanation>궁금하신 사항은 상단 위에 ? 표시를 누르시면 볼 수 있습니다!</Explanation>
            </ExplanationWrapper>
        </Container>
    )
}

const Container = styled.div`
    margin: 40px 32px 90px 32px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    margin-bottom: 70px;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
`

const ExplanationWrapper = styled.div`
    width: 352px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Explanation = styled.span`
    
`