import { useState, useEffect, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate, Routes, Route } from "react-router-dom";

const WorksTv = () => {
  const location = useLocation();
  const works = [
    "img-works01/1_QUEIO.webp",
    "img-works03/1_LETTERING.webp",
    "img-works02/1_CHARACTER.webp",
    "img-works04/1_VETRINA.webp",
    "img-works05/1_POPUP.webp",
    "img-works06/5_MISC.webp",
  ];
  const tagRelocation = ["01Queio", "03Lettering", "02Character", "04Vetrina", "05Popup", "06Misc"];
  const h2S = ["QUEIO", "LETTERING", "CHARACTER DESIGN", "WINDOW DISPLAYS", "POP-UP", "MISC"];
  const descriptions = [
    "Visual content and graphic posts created for Queio Store, including Instagram posts and t-shirt garphics.",
    "Explorations lettering, featuring custom alpjhabets, expressive letterforms and experimental sketches.",
    "Character design explorations focused on expressive shapes and personality.",
    "Window display designs developed to creare strong visual impact and storytelling for retail spaces...",
    "Live spray painting pop-up event featuring on-site T-shirt customization and an exhibition of original canvases.",
    "Misc random works.",
  ];
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const getWork = () => {
    if (!location.hash) return;
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
  }, [location.hash]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (width < 768) navigate("/works");
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <Row className="gap-5 justify-content-around align-items-center mb-custom-tv-works">
        {works.map((e, i) => {
          return (
            <Fragment key={i}>
              <div id={tagRelocation[i]} />
              <Row className={`"w-100 justify-content-around align-items-center ${i === 0 ? "min-vh-90" : ""}`}>
                <Col className="col-3">
                  <p className="fs-1 text-start lh-sm-custom"> {h2S[i]}</p>
                </Col>
                <Col className="col-4">
                  <Link
                    to={`/WorksTv/${tagRelocation[i]}`}
                    className={`d-block w-100 h-100 align-items-center w-custom-tv-works z-3 flex-shrink-0 panel ${i !== 2 ? "shadow-custom" : ""} position-relative`}
                  >
                    <img src={e} alt="foto" className="w-100" />
                  </Link>
                </Col>
                <Col className="col-3">
                  {" "}
                  <p className="text-center fs-6 lh-sm-custom">{descriptions[i]}</p>
                </Col>
              </Row>
            </Fragment>
          );
        })}
      </Row>

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
