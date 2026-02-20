import { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const WorksTv = () => {
  console.log(".");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.hash.slice(2, 3));
  const locationCounter = parseFloat(location.hash.slice(2, 3)) - 1;

  const works = [
    "img-works01/1_QUEIO.webp",
    "img-works02/1_CHARACTER.webp",
    "img-works03/1_LETTERING.webp",
    "img-works04/1_VETRINA.webp",
    "img-works05/1_POPUP.webp",
    "img-works06/5_MISC.webp",
  ];
  const tagRelocation = ["01Queio", "02Character", "03Lettering", "04Vetrina", "05Popup", "06Misc"];
  const h2S = ["QUEIO", "CHARACTER DESIGN", "LETTERING", "WINDOW DISPLAYS", "POP-UP", "MISC"];
  const descriptions = [
    "Visual content and graphic posts created for Queio Store, including Instagram posts and t-shirt graphics.",
    "Character design explorations focused on expressive shapes and personality.",
    "Explorations lettering, featuring custom alphabets, expressive letterforms and experimental sketches.",
    "Window display designs developed to create strong visual impact and storytelling for retail spaces...",
    "Live spray painting pop-up event featuring on-site T-shirt customization and an exhibition of original canvases.",
    "Misc random works.",
  ];

  const [counter, setCounter] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const contentRef = useRef(null);
  const isAnimating = useRef(false);
  useEffect(() => {
    if (location.hash) setCounter(locationCounter);
  }, []);
  useEffect(() => {
    const total = works.length;

    const handleStep = (direction) => {
      isAnimating.current = true;
      setCounter((prev) => (prev + direction + total) % total);

      setTimeout(() => {
        isAnimating.current = false;
      }, 600);
    };

    const obs = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: 0.5,
      tolerance: 300,
      onUp: () => {
        if (!isAnimating.current) handleStep(-1);
      },
      onDown: () => {
        if (!isAnimating.current) handleStep(1);
      },
      preventDefault: true,
    });

    return () => obs.kill();
  }, [works.length]);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
    );
  }, [counter]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (width < 768) navigate("/works");
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="vh-100 overflow-hidden">
      <div ref={contentRef} className="h-100 z-3 position-relative">
        <Row className="w-100 justify-content-around align-items-center min-vh-100 m-0">
          <Col className="col-3">
            <p className="fs-3 text-start lh-sm-custom uppercase font-weight-bold">{h2S[counter]}</p>
          </Col>

          <Col className="col-4">
            <Link to={`/WorksTv/${tagRelocation[counter]}`} className={"d-block w-100 h-100 align-items-center z-3 panel position-relative"}>
              <img src={works[counter]} alt={h2S[counter]} className="w-100  rounded " draggable="false" />
            </Link>
          </Col>

          <Col className="col-3">
            <p className="text-start  lh-sm-custom">{descriptions[counter]}</p>
          </Col>
        </Row>
      </div>

      {/* Marquee fisso */}
      <div className="marquee position-fixed bottom-0 ">
        <div className="marquee-track">
          <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
          <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
          <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
          <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
        </div>
      </div>
    </div>
  );
};

export default WorksTv;
