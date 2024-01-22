import styled from "styled-components";
import profile from "../../assets/images/profile.svg"

/**헤더 프로필 버튼 */
export default function MainLogoButton({ onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <img src={profile} width = {20} height={20} alt="profile" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    cursor: pointer;
`