const Info = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-custom-info">
        <section className="d-flex justify-content-center align-items-center flex-column">
          <ul className="list-unstyled text-black text-center custom-m fs-1 moveUl d-flex flex-column mb-0 gap-custom">
            <li className="mb-2 fw-custom">
              <span>DANIELE PIACENTILE</span>
            </li>
            <li className="mb-2 fw-custom">
              <span>ELSOLITOO10@GMAIL.COM</span>
            </li>
            <li className="mb-2 fw-custom">
              <a href="tel:+393519804290" className="phone-link">
                <span>+39 351 980 4290</span>
              </a>
            </li>
            <a href="https://www.instagram.com/_.elsolito._?igsh=czZwYzB0NTNxaWtp&utm_source=qr" className="text-black text-decoration-none">
              <li className="mb-2 fw-custom lastLi">
                <span>INSTAGRAM ACCOUNT</span>
              </li>
            </a>
          </ul>
          <img src="imgLanding/TELEFONOWEBMOBILE.png" alt="" className="w-75 mh-custom moveImg" />
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
