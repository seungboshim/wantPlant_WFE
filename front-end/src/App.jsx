import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Layout } from "./components/layout/Layout";
// import { Footer } from "./components/layout/Footer";

//import MainPage from "./pages/main/MainPage";
//import LoginPage from "./pages/login/LoginPage";
//import JoinPage from "./pages/join/JoinPage";
//import KakaoAuthPage from "./pages/login/KakaoAuthPage";
//import GardenPage from "./pages/garden/GardenPage";
import MakeGarden from "./pages/makeGarden/MakeGarden";


function App() {
  return (
    <>
      <BrowserRouter>
        {/** TODO : isLoggedIn일 때만 헤더 보이게 */}
        <Header />
        <Layout>
          <Routes>
            {/* <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/auth/kakao/callback" element={<KakaoAuthPage />} />
            <Route path="/garden" element={<GardenPage />} /> */}
            <Route path="makeGarden" element={<MakeGarden />}/>
          </Routes>
        </Layout>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
