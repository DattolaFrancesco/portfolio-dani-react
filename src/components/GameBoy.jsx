import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameBoy = () => {
  const location = useLocation();
  console.log(location.hash);
  const navigate = useNavigate();
  const images = [
    "/imgLanding/QUEIO_12.webp",
    "/imgLanding/CHARACTER_2.webp",
    "/imgLanding/3_LETTERING.webp",
    "/imgLanding/4_Vetrina.png",
    "/imgLanding/5_POPUP.webp",
    "/imgLanding/MISC_6.webp",
  ];
  const tagRelocation = ["01Queio", "02Character", "03Lettering", "04Vetrina", "05Popup", "06Misc"];
  const btnUpRef = useRef(null);
  const btnRightRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnDownRef = useRef(null);
  const btnPushRef = useRef(null);
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
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
    setShowVideo(true);

    setTimeout(() => {
      setImage(images[n]);

      setTimeout(() => {
        setShowVideo(false);
        isloading.current = false;
      }, 100);
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
      <img id="worksDisplayer" src="imgLanding/GAMEBOYOFFICIAL.webp" alt="gameboy" decoding="async" draggable="false" className="size-custom" />
      <div className="position-absolute custom-gameboy-size overflow-hidden">
        <img id="worksPhoto" src={image} alt="works" draggable="false" className="w-100 h-100" loading="eager" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            objectFit: "cover",
            pointerEvents: "none",
            opacity: showVideo ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          <source src="/imgLanding/blur.webm" type="video/webm" />
          <source src="/imgLanding/blur.mp4" type="video/mp4" />
        </video>
      </div>
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
        <img src="imgLanding/su.webp" alt="" loading="lazy" decoding="async" draggable="false" className="w-100 h-100" />
      </a>
      {/* destro */}
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
        ref={btnRightRef}
        onTouchStart={() => {
          btnRightRef.current.classList.add("custom-positionRight-touched");
        }}
        onTouchEnd={() => {
          btnRightRef.current.classList.remove("custom-positionRight-touched");
        }}
        onTouchCancel={() => {
          btnRightRef.current.classList.remove("custom-positionRight-touched");
        }}
        id="btnUp"
        className="custom-positionRight position-absolute"
      >
        <img src="imgLanding/su.webp" alt="" loading="lazy" decoding="async" draggable="false" className="w-100 h-100 d-none" />
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
        <img src="imgLanding/giu.webp" alt="" loading="lazy" decoding="async" draggable="false" className="w-100 h-100" />
      </a>
      {/* sinistro */}
      <a
        onClick={(e) => {
          if (!isloading.current) {
            isloading.current = true;
            e.preventDefault();
            console.log(counter);
            setCounter((prev) => prev - 1);
          }
        }}
        ref={btnLeftRef}
        onTouchStart={() => {
          (btnLeftRef.current.classList.add("custom-positionLeft-touched"), { passive: true });
        }}
        onTouchEnd={() => {
          (btnLeftRef.current.classList.remove("custom-positionLeft-touched"), { passive: true });
        }}
        onTouchCancel={() => {
          (btnLeftRef.current.classList.remove("custom-positionLeft-touched"), { passive: true });
        }}
        id="btnDown"
        className="position-absolute custom-positionLeft"
      ></a>
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
        <img src="imgLanding/PUSH.webp" loading="lazy" decoding="async" draggable="false" alt="" className="w-100 h-100" />
      </a>
    </section>
  );
};
export default GameBoy;
