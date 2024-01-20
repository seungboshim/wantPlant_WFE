import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

import LoginPage from "./pages/login/LoginPage";
import JoinPage from "./pages/join/JoinPage";
import KakaoAuthPage from "./pages/login/KakaoAuthPage";
import GardenFooter from "./pages/components/GardenFooter";
import TestPage from "./pages/component/TestPage";

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
            <Route path="/gardenFooter" element={<GardenFooter />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </Layout>
        {/** <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
