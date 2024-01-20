import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import JoinPage from "./pages/join/JoinPage";
import KakaoAuthPage from "./pages/login/KakaoAuthPage";
import GardenPage from "./pages/garden/GardenPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/** <Header /> */}
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/auth/kakao/callback" element={<KakaoAuthPage />} />
            <Route path="/garden" element={<GardenPage />} />
          </Routes>
        </Layout>
        {/** <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
