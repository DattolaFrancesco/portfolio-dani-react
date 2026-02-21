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
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const isloading = useRef(false);
  const btnUpRef = useRef(null);
  const btnDownRef = useRef(null);
  const btnPushRef = useRef(null);
  const counterControll = () => {
    if (counter < 0) setCounter(5);
  };
  const pushWork = (n) => {
    navigate(`/WorksTv#${tagRelocation[n]}`);
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
    setShowVideo(true);

    setTimeout(() => {
      setImage(images[n]);

      setTimeout(() => {
        setShowVideo(false);
        isloading.current = false;
      }, 100);
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
    <section id="tv" className="size-custom position-relative testAnimation">
      <img src="tv/Tvnobtn.webp" alt="tv" loading="lazy" decoding="async" draggable="false" className="size-custom" />

      <div className="position-absolute custom-tv-size overflow-hidden">
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
          <source src="/imgLanding/blur.mp4" type="video/mp4" />
        </video>
      </div>
      <a
        ref={btnUpRef}
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
        className="position-absolute cursor-pointer-tv"
        onTouchStart={() => {
          btnUpRef.current.classList.add("custom-position-touched-tv");
        }}
        onTouchEnd={() => {
          btnUpRef.current.classList.remove("custom-position-touched-tv");
        }}
        onTouchCancel={() => {
          btnUpRef.current.classList.remove("custom-position-touched-tv");
        }}
      >
        <img src="tv/btndirection.png" alt="btn direction tv" loading="lazy" decoding="async" draggable="false" className="w-100" />
        <img src="tv/FERRO_PUSH.png" alt="btn direction tv" loading="lazy" decoding="async" draggable="false" className=" position-absolute steel-circleUp" />
      </a>
      <a
        ref={btnDownRef}
        onClick={(e) => {
          if (!isloading.current) {
            isloading.current = true;
            e.preventDefault();
            console.log(counter);
            setCounter((prev) => (prev - 1) % images.length);
          }
        }}
        id="btn-tv-down"
        className="position-absolute  cursor-pointer-tv"
        onTouchStart={() => {
          btnDownRef.current.classList.add("custom-position-touched-tv");
        }}
        onTouchEnd={() => {
          btnDownRef.current.classList.remove("custom-position-touched-tv");
        }}
        onTouchCancel={() => {
          btnDownRef.current.classList.remove("custom-position-touched-tv");
        }}
      >
        {" "}
        <img className="rotate-btn-tv w-100" src="tv/btndirection.png" alt="btn direction tv" loading="lazy" decoding="async" draggable="false" />
        <img src="tv/FERRO_PUSH.png" alt="btn direction tv" loading="lazy" decoding="async" draggable="false" className=" position-absolute steel-circleDown" />
      </a>
      <a
        ref={btnPushRef}
        onClick={(e) => {
          e.preventDefault();
          pushWork(counter);
        }}
        id="btn-tv-push"
        className="position-absolute cursor-pointer-tv"
        onTouchStart={() => {
          btnDownRef.current.classList.add("custom-position-touched-tv");
        }}
        onTouchEnd={() => {
          btnDownRef.current.classList.remove("custom-position-touched-tv");
        }}
        onTouchCancel={() => {
          btnDownRef.current.classList.remove("custom-position-touched-tv");
        }}
      >
        <img
          className=" 
        w-100"
          src="tv/btntv.png"
          alt="btn push tv"
        />
        <img src="tv/FERRO_PUSH.png" alt="btn direction tv" loading="lazy" decoding="async" draggable="false" className=" position-absolute steel-circlePush" />
      </a>
    </section>
  );
};
export default Tv;
