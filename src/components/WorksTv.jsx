import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WorksTv = () => {
  const works = [
    "img-works01/1_QUEIO.png",
    "img-works02/1_CHARACTER.png",
    "img-works03/1_LETTERING.png",
    "img-works04/1_VETRINA.JPG",
    "img-works05/1_POPUP.png",
    "img-works06/1_MISC.png",
  ];
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (width < 576) navigate("/works");
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center min-vh-100 gap-works-tv m-custom-works-tv mb-works-tv container">
          {works.map((e, i) => {
            return (
              <div
                key={i}
                className={`w-custom-tv-works z-3 flex-shrink-0 panel ${i % 2 === 0 ? "align-self-end" : "align-self-start"} ${i !== 1 ? "shadow-custom" : ""}`}
              >
                <img
                  src={e}
                  alt="foto"
                  className="w-100
      "
                />
              </div>
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
      </div>
    </>
  );
};
export default WorksTv;
