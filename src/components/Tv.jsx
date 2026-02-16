import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tv = () => {
  const location = useLocation();
  const images = [
    "tv/worksTv/1_QUEIO.webp",
    "tv/worksTv/2_CHARACTER.webp",
    "tv/worksTv/3_LETTERING.webp",
    "tv/worksTv/4_WINDOW.webp",
    "tv/worksTv/5_POPUP.webp",
    "tv/worksTv/6_MISC.webp",
  ];
  const tagRelocation = ["01Queio", "02Character", "03Lettering", "04Vetrina", "05Popup", "06Misc"];
  const navigate = useNavigate();
  const blur = new Image();
  blur.src = "imgLanding/blur.gif";
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const isloading = useRef(false);
  const counterControll = () => {
    if (counter < 0) setCounter(5);
  };
  const pushWork = (n) => {
    navigate(`/works#${tagRelocation[n]}`);
  };
  const redirect = () => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      scrollTo(0, 0);
    }
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
  useEffect(() => {
    redirect();
  }, [location]);

  return (
    <section id="tv" className="size-custom position-relative">
      <img src="tv/OfficialBG.webp" alt="" className="size-custom" />
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
      >
        <img src="tv/btndirection.png" alt="btn direction tv" className="w-100" />
      </a>
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
      >
        {" "}
        <img className="rotate-btn-tv w-100" src="tv/btndirection.png" alt="btn direction tv" />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          pushWork(counter);
        }}
        id="btn-tv-push"
        className="position-absolute"
      >
        <img
          className=" 
        w-100"
          src="tv/btntv.png"
          alt="btn push tv"
        />
      </a>
    </section>
  );
};
export default Tv;
