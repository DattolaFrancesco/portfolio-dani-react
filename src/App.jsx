import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { lazy, Suspense } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
const NavBar = lazy(() => import("./components/NavBar"));
const LandingPage = lazy(() => import("./components/LandingPage"));
const Info = lazy(() => import("./components/info"));
const Works = lazy(() => import("./components/Works"));
const Landingscaping = lazy(() => import("./components/Landscaping"));
const WorksTv = lazy(() => import("./components/WorksTv"));
const SingleWorksTv = lazy(() => import("./components/SingleWorkTv"));

function App() {
  const works01 = [
    "/img-works01/1_QUEIO.webp",
    "/img-works01/2_QUEIO.webp",
    "/img-works01/3_QUEIO.webp",
    "/img-works01/4_QUEIO.webp",
    "/img-works01/5_QUEIO.webp",
    "/img-works01/6_QUEIO.webp",
    "/img-works01/7_QUEIO.webp",
    "/img-works01/8_QUEIO.webp",
  ];
  const works02 = [
    "/img-works02/1_CHARACTER.webp",
    "/img-works02/2_CHARACTER.webp",
    "/img-works02/3_CHARACTER.webp",
    "/img-works02/4_CHARACTER.webp",
    "/img-works02/5_CHARACTER.webp",
    "/img-works02/6_CHARACTER.webp",
    "/img-works02/7_CHARACTER.webp",
    "/img-works02/8_CHARACTER.webp",
  ];
  const works03 = ["/img-works03/1_LETTERING.webp", "/img-works03/2_LETTERING.webp"];
  const works04 = ["/img-works04/1_VETRINA.webp", "/img-works04/2_VETRINA.webp", "/img-works04/3_VETRINA.webp", "/img-works04/4_VETRINA.JPG"];
  const works05 = ["/img-works05/1_POPUP.webp", "/img-works05/2_POPUP.webp", "/img-works05/3_POPUP.webp", "/img-works05/4_POPUP.webp"];
  const works06 = ["/img-works06/1_MISC.webp", "/img-works06/2_MISC.jpg", "/img-works06/3_MISC.jpg", "/img-works06/4_MISC.jpg", "/img-works06/5_MISC.webp"];
  const works = [works01, works02, works03, works04, works05, works06];
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    works.map((e) => {
      e.map((e) => {
        const img = new Image();
        img.src = e;
      });
    });
  }, []);

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100 ">
          <h1 className="display-1 text-danger">ELSOLITO</h1>
          <Spinner />
        </div>
      }
    >
      <HashRouter>
        <div>
          <Landingscaping />
          <header className="d-flex justify-content-center">
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path={"/*"} element={<LandingPage />} />
              <Route path={"/info"} element={<Info />} />
              <Route path={"/works"} element={<Works />} />
              <Route path={"/WorksTv"} element={<WorksTv />} />
              <Route path="/WorksTv/:work" element={<SingleWorksTv />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </Suspense>
  );
}

export default App;
