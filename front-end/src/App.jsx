import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/layout/Footer";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
