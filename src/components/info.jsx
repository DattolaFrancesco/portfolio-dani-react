import { Col, Row } from "react-bootstrap";

const Info = () => {
  return (
    <>
      <div id="info-cont" className="d-flex align-items-center vh-custom-info">
        <section>
          <Row className="mx-2 gap-custom-info">
            <Col xs={12} className="fs-5 lh-sm fw-normal w-max-content moveUl">
              <h1 className="mb-4 display-4 fw-custom-info lh-1">
                DANIELE
                <br /> <span className="underline position-relative">PIACENTILE</span>
              </h1>
              <a href="tel:+393519804290" className="phone-link">
                <p className="m-0">+39 351 980 4290</p>
              </a>
              <a href="mailto:ELSOLITOO10@GMAIL.COM" className="text-black text-decoration-none">
                <p className="m-0">ELSOLITOO10@GMAIL.COM</p>
              </a>
              <a href="https://www.instagram.com/_.elsolito._?igsh=czZwYzB0NTNxaWtp&utm_source=qr" className="text-black text-decoration-none">
                <p className="m-0">INSTAGRAM ACCOUNT</p>
              </a>
            </Col>
            <Col xs={12} className="d-flex justify-content-end moveImg" style={{ zIndex: "999" }}>
              <img src="/imgLanding/TELEFONOWEBMOBILE.png" alt="" className="w-custom-info-cell" />
            </Col>
          </Row>
        </section>
        <div className="marquee d-none">
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
export default Info;
