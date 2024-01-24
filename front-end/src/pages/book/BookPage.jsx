import {React} from "react";
import styled from "styled-components";

export default function BookPage(){

    return(
        <Main>
            <Header>

            </Header>
            <Layout>
                <Subject>
                    <Garden>
                        <Name>
                            공부
                        </Name>
                    </Garden>
                    <Garden>
                        <Name>
                            운동
                        </Name>
                    </Garden>
                    <Garden>
                        <Name>
                            취미
                        </Name>
                    </Garden>
                </Subject>
            </Layout>
            <Footer>

            </Footer>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.green02};
    width: 1280px;
    height: 1500px;
`
const Header = styled.div`
    display: flex;
    width: 100%;
    height: 4%;
`
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 96%;
`
const Footer = styled.div`
    display: flex;
`
const Subject = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: 3%;
`
const Garden = styled.div`
    display: flex;
    flex-direction: column;
    width: 78%;
    height: 34%;
`
const Name = styled.div`
    width: 9%;
    height: 13%;
`
