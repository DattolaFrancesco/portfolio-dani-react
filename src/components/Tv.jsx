import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tv = () => {
  const images = [
    "tv/worksTv/1_QUEIO.png",
    "tv/worksTv/2_CHARACTER.png",
    "tv/worksTv/3_LETTERING.png",
    "tv/worksTv/4_WINDOW.png",
    "tv/worksTv/5_POPUP.png",
    "tv/worksTv/6_MISC.png",
  ];
  const blur = new Image();
  blur.src = "imgLanding/blur.gif";
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const isloading = useRef(false);
  const counterControll = () => {
    if (counter < 0) setCounter(5);
  };
  const changeImg = (n) => {
    setImage("imgLanding/blur.gif");
    setTimeout(() => {
      setImage(images[n]);
      isloading.current = false;
    }, 300);
  };
  useEffect(() => {
    console.log(" effect");
    counterControll();
    changeImg(counter);
  }, [counter]);

  return (
    <section id="tv" className="size-custom position-relative">
      <img src="tv/TvBg.png" alt="" className="size-custom" />
      <img src={`${image ? image : "imgLanding/blur.gif"}`} alt="" className="position-absolute  custom-tv-size" />
      <a
        onClick={(e) => {
          console.log(isloading.current);
          if (!isloading.current) {
            isloading.current = true;
            e.preventDefault();
            console.log(counter);
            setCounter((prev) => (prev + 1) % images.length);
          }
        }}
        id="btn-tv-up"
        className="position-absolute  "
      ></a>
      <a
        onClick={(e) => {
          if (!isloading.current) {
            isloading.current = true;
            e.preventDefault();
            console.log(counter);
            setCounter((prev) => (prev - 1) % images.length);
          }
        }}
        id="btn-tv-down"
        className="position-absolute  "
      ></a>
    </section>
  );
};
export default Tv;
