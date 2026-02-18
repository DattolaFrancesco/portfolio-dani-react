import { useState, useEffect, Fragment } from "react";
import { Link, useLocation, useNavigate, Routes, Route } from "react-router-dom";

const WorksTv = () => {
  const location = useLocation();
  const works = [
    "img-works01/1_QUEIO.webp",
    "img-works02/1_CHARACTER.webp",
    "img-works03/1_LETTERING.webp",
    "img-works04/1_VETRINA.webp",
    "img-works05/1_POPUP.webp",
    "img-works06/5_MISC.webp",
  ];
  const tagRelocation = ["01Queio", "02Character", "03Lettering", "04Vetrina", "05Popup", "06Misc"];
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const getWork = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let loc = location.hash;
      const id = loc.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };
  useEffect(() => {
    getWork();
  }, [location]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (width < 768) navigate("/works");
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div className="d-flex flex-column align-items-center min-vh-100 gap-works-tv m-custom-works-tv mb-works-tv ">
        {works.map((e, i) => {
          return (
            <Fragment key={i}>
              <div id={tagRelocation[i]} />
              <Link
                to={`/WorksTv/${tagRelocation[i]}`}
                className={`${i % 2 === 0 ? "align-self-end" : "align-self-start"} w-custom-tv-works z-3 flex-shrink-0 panel ${i !== 1 ? "shadow-custom" : ""}`}
              >
                <img src={e} alt="foto" className="w-100" />
              </Link>
            </Fragment>
          );
        })}
      </div>

      <p className="scrollP-tv-Works">SCROLL DOWN</p>

      <div className="marquee position-fixed bottom-0 z-0">
        <div className="marquee-track">
          <h1>ILLUSTRATOR AND GRAPHIC AND</h1>
          <h1>ILLUSTRATOR AND GRAPHIC AND</h1>
          <h1>ILLUSTRATOR AND GRAPHIC AND</h1>
          <h1>ILLUSTRATOR AND GRAPHIC AND</h1>
        </div>
      </div>
    </>
  );
};
export default WorksTv;
