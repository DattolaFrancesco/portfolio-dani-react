import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  return (
    <>
      <div
        className={`animationNav d-flex justify-content-between align-items-center mt-2 ${location.pathname === "/info" ? " position-sticky " : " position-fixed "}top-0 w-100`}
        style={{ zIndex: "9999" }}
      >
        <a
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/imgLanding/Cuore.png" alt="" />
        </a>
        <div className="list-unstyled d-flex align-items-center mb-0 bg-glass rounded-pill px-2 w-max-content gap-3 py-2 px-2">
          <Link
            to={location.pathname === "/works" ? "/#game-boy" : "/works"}
            className={`nav-link fw-bold px-2 rounded-pill ${location.pathname === "/works" ? " selector" : ""}`}
          >
            {location.pathname === "/works" ? "GAMEBOY" : "WORKS"}
          </Link>
          <Link to={"/info"} className={`nav-link rounded-pill px-2 fw-bold ${location.pathname === "/info" ? " selector" : ""}`}>
            INFO
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
