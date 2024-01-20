import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

import LoginPage from "./pages/login/LoginPage";
import JoinPage from "./pages/join/JoinPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/** <Header /> */}
        <Layout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Routes>
        </Layout>
        {/** <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
