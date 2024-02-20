import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/layout/Footer";

import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import JoinPage from "./pages/join/JoinPage";
import KakaoAuthPage from "./pages/login/KakaoAuthPage";
import GardenPage from "./pages/garden/GardenPage";

import BookPage from "./pages/book/BookPage";
import StudyGardenPage from "./pages/garden/StudyGardenPage";
import HobbyGardenPage from "./pages/garden/HobbyGardenPage";
import ExerciseGardenPage from "./pages/garden/ExerciseGardenPage";
import CalenderPage from "./pages/garden/CalenderPage";
import MakeGardenPage from "./pages/garden/MakeGardenPage";
import TestPage from "./pages/components/TestPage";

import ProfilePage from "./pages/myPage/ProfilePage";
import InformPage from "./pages/myPage/InformPage";
import FAQPage from "./pages/myPage/FAQPage";

import { useRecoilValue } from "recoil";
import { IsLoggedInAtom } from "./recoil/atom";

import { getMemberInform } from "./apis/member/member";

function App() {
  const isLoggedIn = useRecoilValue(IsLoggedInAtom);

  const [nickname, setNickname] = useState("");
  useEffect(() => {
    if (isLoggedIn || localStorage.getItem("access")) {
      getMemberInform().then((inform) => {
        setNickname(inform.nickname)
      })
    }
  }, [])

  return (
    <>
      <BrowserRouter>
      {/** localStorage에 access 토큰 유무로 로그인 여부 확인하여 헤더 렌더링 */}
        {(isLoggedIn || localStorage.getItem("access")) ? 
          <Header name={nickname}/> : <></>
        }
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/auth/kakao/callback" element={<KakaoAuthPage />} />
            <Route path="/garden" element={<GardenPage />}>
              <Route path=":gardenId" element={<GardenPage />} />
              {/* <Route path="/garden/study" element={<StudyGardenPage />} />  
              <Route path="/garden/hobby" element={<HobbyGardenPage />} />  
              <Route path="/garden/exercise" element={<ExerciseGardenPage />} /> */}
            </Route>
            <Route path="/garden/calender" element={<CalenderPage />} />
            <Route path="/garden/add" element={<MakeGardenPage />} />
            <Route path="/garden/book" element={<BookPage/>}/>
            {/* <Route path="/test" element={<TestPage />} /> */}
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/inform" element={<InformPage/>}/>
            <Route path="/faq" element={<FAQPage/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;