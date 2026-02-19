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
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
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
