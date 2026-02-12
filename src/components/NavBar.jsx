import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar className="position-fixed top-0 w-100 p-2" style={{ zIndex: 99999 }}>
      <div className="d-flex justify-content-between   animationNav w-100">
        <Navbar.Brand
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/imgLanding/Cuore.png" alt="" />
        </Navbar.Brand>
        <Nav className="list-unstyled d-flex align-items-center mb-0 bg-glass rounded-pill px-2 ">
          <Link to={"/works"} className="nav-link">
            WORKS
          </Link>
          <Link to={"/info"} className="nav-link">
            INFO
          </Link>
        </Nav>
      </div>
    </Navbar>
  );
};
export default NavBar;
