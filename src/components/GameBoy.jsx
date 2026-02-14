import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameBoy = () => {
  const location = useLocation();
  console.log(location.hash);
  const navigate = useNavigate();
  const images = [
    "imgLanding/1_QUEIO.png",
    "imgLanding/2_CHARACTER.png",
    "imgLanding/3_LETTERING.png",
    "imgLanding/4_Vetrina.png",
    "imgLanding/5_POPUP.png",
    "imgLanding/6_MISC.png",
  ];
  const tagRelocation = ["01Queio", "02Character", "03Lettering", "04Vetrina", "05Popup", "06Misc"];
  const blur = new Image();
  blur.src = "imgLanding/blur.gif";
  const btnUpRef = useRef(null);
  const btnDownRef = useRef(null);
  const btnPushRef = useRef(null);
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const isloading = useRef(false);
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
  const counterControll = () => {
    if (counter > 5) setCounter(0);
    else if (counter < 0) setCounter(5);
  };
  const changeImg = (n) => {
    setImage("imgLanding/blur.gif");
    setTimeout(() => {
      setImage(images[n]);
      isloading.current = false;
    }, 300);
  };
  const pushWork = (n) => {
    navigate(`/works#${tagRelocation[n]}`);
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
    <section id="game-boy" className="position-relative">
      <img id="worksDisplayer" src="imgLanding/GAMEBOYOFFICIAL.png" alt="" className="size-custom" />
      <img id="worksPhoto" src={image} alt="" className="position-absolute custom-gameboy-size" />
      <a
        onClick={(e) => {
          console.log(isloading.current);
          if (!isloading.current) {
            isloading.current = true;
            e.preventDefault();
            console.log(counter);
            setCounter((prev) => prev + 1);
          }
        }}
        ref={btnUpRef}
        onTouchStart={() => {
          btnUpRef.current.classList.add("custom-positionUp-touched");
        }}
        onTouchEnd={() => {
          btnUpRef.current.classList.remove("custom-positionUp-touched");
        }}
        onTouchCancel={() => {
          btnUpRef.current.classList.remove("custom-positionUp-touched");
        }}
        id="btnUp"
        className="custom-positionUp position-absolute"
      >
        <img src="imgLanding/su.png" alt="" className="w-100 h-100" />
      </a>
      <a
        onClick={(e) => {
          if (!isloading.current) {
            isloading.current = true;
            e.preventDefault();
            console.log(counter);
            setCounter((prev) => prev - 1);
          }
        }}
        ref={btnDownRef}
        onTouchStart={() => {
          (btnDownRef.current.classList.add("custom-positionDown-touched"), { passive: true });
        }}
        onTouchEnd={() => {
          (btnDownRef.current.classList.remove("custom-positionDown-touched"), { passive: true });
        }}
        onTouchCancel={() => {
          (btnDownRef.current.classList.remove("custom-positionDown-touched"), { passive: true });
        }}
        id="btnDown"
        className="position-absolute custom-positionDown"
      >
        <img src="imgLanding/giu.png" alt="" className="w-100 h-100" />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          pushWork(counter);
        }}
        ref={btnPushRef}
        onTouchStart={() => {
          (btnPushRef.current.classList.add("custom-push-touched"), { passive: true });
        }}
        onTouchEnd={() => {
          (btnPushRef.current.classList.remove("custom-push-touched"), { passive: true });
        }}
        onTouchCancel={() => {
          (btnPushRef.current.classList.remove("custom-push-touched"), { passive: true });
        }}
        id="btnPush"
        className="position-absolute custom-push"
      >
        <img src="imgLanding/PUSH.png" alt="" className="w-100 h-100" />
      </a>
    </section>
  );
};
export default GameBoy;
