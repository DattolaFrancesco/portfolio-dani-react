import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    console.log(location.pathname);
    setCurrentPath(location.pathname);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  return (
    <div
      className={`animationNav d-flex justify-content-between align-items-center mt-2 ${
        location.pathname === "/info" ? "position-sticky" : "position-fixed"
      } top-0 w-custom-navbar`}
      style={{ zIndex: "9999" }}
    >
      <a className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src="/imgLanding/Cuore.png" alt="Logo" />
      </a>

      <div className="list-unstyled d-flex align-items-center mb-0 bg-glass rounded-pill px-2 w-max-content gap-3 py-2">
        {width > 576 ? (
          <Link to="/WorksTv" className={`nav-link fw-bold px-2 rounded-pill ${location.pathname === "/WorksTv" ? "selector" : ""}`}>
            WORKS
          </Link>
        ) : (
          <Link
            to={location.pathname === "/works" ? "/#game-boy" : "/works"}
            className={`nav-link fw-bold px-2 rounded-pill ${location.pathname === "/works" ? "selector" : ""}`}
          >
            {location.pathname === "/works" ? "GAMEBOY" : "WORKS"}
          </Link>
        )}

        <Link to="/info" className={`nav-link rounded-pill px-2 fw-bold ${location.pathname === "/info" ? "selector" : ""}`}>
          INFO
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
