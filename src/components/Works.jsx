import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Works = () => {
  const works01 = [
    "/img-works01/1_QUEIO.png",
    "/img-works01/2_QUEIO.png",
    "/img-works01/3_QUEIO.png",
    "/img-works01/4_QUEIO.png",
    "/img-works01/5_QUEIO.png",
    "/img-works01/6_QUEIO.png",
    "/img-works01/7_QUEIO.png",
    "/img-works01/8_QUEIO.png",
  ];
  const works02 = [
    "/img-works02/1_CHARACTER.png",
    "/img-works02/2_CHARACTER.png",
    "/img-works02/3_CHARACTER.png",
    "/img-works02/4_CHARACTER.png",
    "/img-works02/5_CHARACTER.png",
    "/img-works02/6_CHARACTER.png",
    "/img-works02/7_CHARACTER.png",
    "/img-works02/8_CHARACTER.png",
  ];
  const works03 = ["/img-works03/1_LETTERING.png", "/img-works03/2_LETTERING.png"];
  const works04 = ["/img-works04/1_VETRINA.JPG", "/img-works04/2_VETRINA.JPG", "/img-works04/3_VETRINA.JPG", "/img-works04/4_VETRINA.JPG"];
  const works05 = ["/img-works05/1_POPUP.png", "/img-works05/2_POPUP.png", "/img-works05/3_POPUP.png", "/img-works05/4_POPUP.png"];
  const works06 = ["/img-works06/1_MISC.png", "/img-works06/2_MISC.png", "/img-works06/3_MISC.png", "/img-works06/4_MISC.png"];
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
    "cose a casonfjnfanfnaf fdsfsjdf fdsfjds.",
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
    }, 500);
  };
  useEffect(() => {
    getWork();
  }, [location]);
  return (
    <>
      {works.map((e, i) => {
        counter++;
        return (
          <>
            <div key={i}>
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
                          data-bs-target={`#${titles[counter - 1]}`}
                          data-bs-slide-to={i}
                          className="active"
                          aria-current="true"
                          aria-label={`Slide ${i + 1}`}
                        ></button>
                      );
                    })}
                  </div>
                  <div className={`carousel-inner ${i === 1 ? "" : "shadow-custom"}`}>
                    {e.map((e, i) => {
                      return (
                        <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                          <img src={e} className="d-block w-100" alt="queio works" />
                        </div>
                      );
                    })}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#${titles[i]}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#${titles[i]}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </section>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Works;
