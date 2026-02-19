import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

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
const works06 = ["/img-works06/5_MISC.webp", "/img-works06/1_MISC.jpg", "/img-works06/2_MISC.jpg", "/img-works06/3_MISC.jpg", "/img-works06/4_MISC.jpg"];
const works = [works01, works02, works03, works04, works05, works06];
const SingleWorksTv = () => {
  const location = useLocation();
  const path = parseFloat(location.pathname.slice(10, 11)) - 1;
  console.log(path);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const secondPanel = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          end: () => "+=" + containerRef.current.offsetWidth * (path === 1 ? 5 : panels.length),
        },
      });

      ScrollTrigger.create({
        trigger: bottomRef.current,
        start: "top bottom",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress >= 0.99 && self.direction === 1) {
            navigate("/WorksTv");
          }
        },
      });
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [navigate, path]);

  return (
    <>
      <div>
        <section ref={containerRef} className="d-flex align-items-center  flex-row overflow-hidden vh-100">
          {works[path].map((works, i) => {
            return (
              <div key={i} className="vh-custom-singleW flex-shrink-0 panel">
                <img src={works} alt="" className="w-100" />
              </div>
            );
          })}
        </section>
        <Row ref={secondPanel} className="min-vh-100 gap-1 gap-lg-5  justify-content-center align-items-center m-custom-singlew">
          {works[path].map((works, i) => {
            return (
              <Col sm={4} md={3} lg={2} xl={1} key={i / 3} className="px-0">
                <img src={works} alt="" className="w-100" />
              </Col>
            );
          })}
        </Row>

        <div ref={bottomRef} style={{ height: "30vh" }} />
      </div>
    </>
  );
};
export default SingleWorksTv;
