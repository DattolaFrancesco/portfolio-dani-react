import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

const SingleWorksTv = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const secondPanel = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 2),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + containerRef.current.offsetWidth * 3,
        },
      });

      ScrollTrigger.create({
        trigger: bottomRef.current,
        start: "top bottom",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress >= 0.99 && self.direction === 1) {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            navigate("/WorksTv");
          }
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, [navigate]);

  return (
    <>
      <section ref={containerRef} className="d-flex align-items-center  flex-row overflow-hidden vh-100">
        {works01.map((works, i) => {
          return (
            <div key={i} className="vh-custom-singleW flex-shrink-0 panel">
              <img src={works} alt="" className="w-100" />
            </div>
          );
        })}
      </section>
      <Row ref={secondPanel} className="min-vh-100 gap-1 gap-lg-5  justify-content-center align-items-center mt-3 mb-custom-singlew">
        {works01.map((works, i) => {
          return (
            <Col sm={3} lg={2} xl={1} key={i / 3} className="px-0">
              <img src={works} alt="" className="w-100" />
            </Col>
          );
        })}
      </Row>

      <div ref={bottomRef} style={{ height: "50vh" }} />
    </>
  );
};
export default SingleWorksTv;
