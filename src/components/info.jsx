import { Col, Row } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
const firstload = false;

const Info = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {width > 768 ? (
        <div id="info-cont" className="vh-custom-info">
          <div className=" lh-sm fw-normal w-max-content moveUl position-absolute bottom-50 left-info-tv">
            <h1 className="mb-4 display-3 fw-custom-info lh-1">
              Daniele
              <br /> <span className="underline position-relative">Piacentile</span>
            </h1>
            <a href="tel:+393519804290" className="phone-link">
              <p className="m-0 p-info">+39 351 980 4290</p>
            </a>
            <a href="mailto:elsolitoo10@gmail.com" className="text-black text-decoration-none">
              <p className="m-0 p-info">elsolitoo10@gmail.com</p>
            </a>
            <a href="https://www.instagram.com/_.elsolito._?igsh=czZwYzB0NTNxaWtp&utm_source=qr" className="text-black text-decoration-none">
              <p className="m-0 p-info">instagram </p>
            </a>
          </div>

          <a href="tel:+393519804290" className="position-absolute bottom-0  end-0 phone-link" style={{ zIndex: "999" }}>
            <img src="/imgLanding/TELEFONOWEBMOBILE.webp" alt="" className="w-custom-info-cell-desktop moveImg" />
          </a>

          <div className="marquee">
            <div className="marquee-track">
              <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
              <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
              <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
              <h1>ILLUSTRATOR AND GRAPHIC DESIGNER - </h1>
            </div>
          </div>
        </div>
      ) : (
        <div id="info-cont" className="d-flex align-items-center vh-custom-info">
          <section>
            <Row className="mx-2 gap-custom-info">
              <Col xs={12} className="fs-5 lh-sm fw-normal w-max-content moveUl ">
                <h1 className="mb-4 display-2  lh-sm-custom-info">
                  Daniele
                  <br /> <span className="underline position-relative">Piacentile</span>
                </h1>
                <a href="tel:+393519804290" className="phone-link">
                  <p className="m-0 ">+39 351 980 4290</p>
                </a>
                <a href="mailto:ELSOLITOO10@GMAIL.COM" className="text-black text-decoration-none">
                  <p className="m-0 ">elsolito010@gmail.com</p>
                </a>
                <a href="https://www.instagram.com/_.elsolito._?igsh=czZwYzB0NTNxaWtp&utm_source=qr" className="text-black text-decoration-none">
                  <p className="m-0 ">instagram</p>
                </a>
              </Col>
              <Col xs={12} className="d-flex justify-content-end" style={{ zIndex: "999" }}>
                <a href="tel:+393519804290" className="phone-link">
                  <img src="/imgLanding/TELEFONOWEBMOBILE.webp" alt="" className="w-custom-info-cell" />
                </a>
              </Col>
            </Row>
          </section>
        </div>
      )}
    </>
  );
};
export default Info;
