import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Info from "./components/info";
import Works from "./components/Works";
import { useEffect } from "react";

function App() {
  const works01 = [
    "/img-works01/1_QUEIO.png",
    "/img-works01/2_QUEIO.png",
    "/img-works01/3_QUEIO.png",
    "/img-works01/4_QUEIO.png",
    "/img-works01/5_QUEIO.png",
    "/img-works01/6_QUEIO.png",
    "/img-works01/7_QUEIO.png",
    "/img-works01/8_QUEIO.png",
  ];
  const works02 = [
    "/img-works02/1_CHARACTER.png",
    "/img-works02/2_CHARACTER.png",
    "/img-works02/3_CHARACTER.png",
    "/img-works02/4_CHARACTER.png",
    "/img-works02/5_CHARACTER.png",
    "/img-works02/6_CHARACTER.png",
    "/img-works02/7_CHARACTER.png",
    "/img-works02/8_CHARACTER.png",
  ];
  const works03 = ["/img-works03/1_LETTERING.png", "/img-works03/2_LETTERING.png"];
  const works04 = ["/img-works04/1_VETRINA.JPG", "/img-works04/2_VETRINA.JPG", "/img-works04/3_VETRINA.JPG", "/img-works04/4_VETRINA.JPG"];
  const works05 = ["/img-works05/1_POPUP.png", "/img-works05/2_POPUP.png", "/img-works05/3_POPUP.png", "/img-works05/4_POPUP.png"];
  const works = [works01, works02, works03, works04, works05];
  useEffect(() => {
    works.map((e) => {
      e.map((e) => {
        const img = new Image();
        img.src = e;
      });
    });
  }, []);
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
