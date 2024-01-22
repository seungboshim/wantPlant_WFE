import styled from "styled-components";
import mainLogo from "./MainLogo";
import profile from "./Profile";
import question from "./Question";
import welcome from "./Welcome";

/**헤더 */
export default function Header() {
    return (
        <Container>
            <Logo>
                <mainLogo/>
            </Logo>
            <Welcome>
                <welcome/>
            </Welcome>
            <Tool>
                <question/>
                <profile/>
            </Tool>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1280px;
    height: 52px;
`
const Logo = styled.div`
    width: 84px;
    height: 28px;
    margin-top: 12px;
    margin-left: 52px;
`
const Welcome = styled.div`
    width: 216px;
    height: 32px;
    margin-top: 10px;
    margin-left: 958px;
    border-radius: 4px;
`
const Tool = styled.div`
    display: flex;
    flex-direction: row;
    width: 52px;
    height: 20px;
    margin-top: 16px;
    margin-left: 1208px;
    gap: 12px;
`