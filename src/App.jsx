import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Info from "./components/info";
import Works from "./components/Works";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/info"} element={<Info />} />
          <Route path={"/works"} element={<Works />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
