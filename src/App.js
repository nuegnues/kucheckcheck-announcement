import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import AnnounceList from "./components/AnnounceList";
import AnnounceRegister from "./components/AnnounceRegister";
import AnnounceDetail from "./components/AnnounceDetail";
import AnnounceModifiy from "./components/AnnounceModify";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/announce" element={<AnnounceList />} />
            <Route path="/announce/register" element={<AnnounceRegister />} />
            <Route
              path="/announce/detail/:announceId"
              element={<AnnounceDetail />}
            />
            <Route
              path="/announce/register/:announceId"
              element={<AnnounceModifiy />}
            />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
