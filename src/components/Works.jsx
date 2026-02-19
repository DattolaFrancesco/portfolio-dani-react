import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";

const Works = () => {
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
  const works04 = ["/img-works04/1_VETRINA.webp", "/img-works04/2_VETRINA.webp", "/img-works04/3_VETRINA.webp", "/img-works04/4_VETRINA.jpg"];
  const works05 = ["/img-works05/1_POPUP.webp", "/img-works05/2_POPUP.webp", "/img-works05/3_POPUP.webp", "/img-works05/4_POPUP.webp"];
  const works06 = ["/img-works06/5_MISC.webp", "/img-works06/1_MISC.webp", "/img-works06/2_MISC.jpg", "/img-works06/3_MISC.jpg", "/img-works06/4_MISC.jpg"];
  const works = [works01, works02, works03, works04, works05, works06];
  const tagRelocation = ["01Queio", "02Character", "03Lettering", "04Vetrina", "05Popup", "06Misc"];
  const titles = ["QUEIO", "CHARACTER", "Lettering", "Vetrina", "Popup", "Misc"];
  const h2S = ["QUEIO", "CHARACTER DESIGN", "LETTERING", "WINDOW DISPLAYS", "POP-UP", "MISC"];
  const descriptions = [
    "Visual content and graphic posts created for Queio Store, including Instagram posts and t-shirt garphics.",
    "Character design explorations focused on expressive shapes and personality.",
    "Explorations lettering, featuring custom alpjhabets, expressive letterforms and experimental sketches.",
    "Window display designs developed to creare strong visual impact and storytelling for retail spaces...",
    "Live spray painting pop-up event featuring on-site T-shirt customization and an exhibition of original canvases.",
    "Misc random works.",
  ];
  let counter = 0;
  const location = useLocation();
  const getWork = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let loc = location.hash;
      const id = loc.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };
  useEffect(() => {
    getWork();
  }, [location]);
  useEffect(() => {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((c) => new bootstrap.Carousel(c, { touch: true }));
  }, []);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (width > 768) navigate("/WorksTV");
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div className="mb-custom-last-work">
        {works.map((e, i) => {
          counter++;
          return (
            <div key={i} className={`${i === 0 ? "mt-4" : ""}`}>
              <section className="interval" id={tagRelocation[i]}></section>
              <section className={i === 5 ? "mb-5" : ""}>
                <div className="container">
                  <section className="mt-5">
                    <h2 className="fs-custom-works fw-semibold">{h2S[i]}</h2>
                    <p className="fs-7">{descriptions[i]}</p>
                  </section>
                </div>
                <div id={titles[i]} className="carousel slide">
                  <div className="carousel-indicators">
                    {e.map((e, i) => {
                      return (
                        <button
                          key={i}
                          type="button"
                          data-bs-target={`#${titles[i]}`}
                          data-bs-slide-to={i}
                          className={i === 0 ? "active" : ""}
                          aria-current={i === 0 ? "true" : undefined}
                          aria-label={`Slide ${i + 1}`}
                        ></button>
                      );
                    })}
                  </div>
                  <div className={`carousel-inner ${i === 1 ? "" : "shadow-custom"}`} style={{ minHeight: "40vh" }}>
                    {e.map((e, i) => {
                      return (
                        <div className={` carousel-item ${i === 0 ? "active" : ""} `} key={i}>
                          <img src={e} className="d-block w-100" loading="lazy" draggable="false" alt="queio works" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Works;
