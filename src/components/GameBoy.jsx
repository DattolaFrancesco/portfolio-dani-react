import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GameBoy = () => {
  const navigate = useNavigate();
  const images = [
    "imgLanding/1_Queio.png",
    "imgLanding/2_character.png",
    "imgLanding/4_LETTERING.png",
    "imgLanding/3_Vetrina.png",
    "imgLanding/2_Popup.png",
    "imgLanding/6_Misc.png",
  ];
  console.log(images[0]);
  const [image, setImage] = useState(images[0]);
  const [counter, setCounter] = useState(0);
  const counterControll = () => {
    if (counter > 5) setCounter(0);
    else if (counter < 0) setCounter(5);
  };
  const changeImg = (n) => {
    switch (n) {
      case 0:
        setImage(images[0]);
        break;
      case 1:
        setImage(images[1]);
        break;
      case 2:
        setImage(images[2]);
        break;
      case 3:
        setImage(images[3]);
        break;
      case 4:
        setImage(images[4]);
        break;
      case 5:
        setImage(images[5]);
        break;
    }
  };
  const pushWork = (n) => {
    switch (n) {
      case 0:
        navigate("/works#01Queio");
        break;
      case 1:
        navigate("/works#02Character");
        break;
      case 2:
        navigate("/works#03Lettering");
        break;
      case 3:
        navigate("/works#04Vetrina");
        break;
      case 4:
        navigate("/works#05Popup");
        break;
      case 5:
        navigate("/works#06Misc");
        break;
    }
  };
  useEffect(() => {
    console.log(" effect");
    counterControll();
    changeImg(counter);
  }, [counter]);
  return (
    <section id="game-boy" className="position-relative">
      <img id="worksDisplayer" src="imgLanding/GAMEBOYOFFICIAL.png" alt="" className="size-custom" />
      <img id="worksPhoto" src={image} alt="" className="position-absolute custom-gameboy-size" />
      <a
        onClick={(e) => {
          e.preventDefault();
          console.log(counter);
          setCounter((prev) => prev + 1);
        }}
        id="btnUp"
        className="custom-positionUp position-absolute"
      >
        <img src="imgLanding/su.png" alt="" className="w-100 h-100" />
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          console.log(counter);
          setCounter((prev) => prev - 1);
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
        id="btnPush"
        className="position-absolute custom-push"
      >
        <img src="imgLanding/PUSH.png" alt="" className="w-100 h-100" />
      </a>
    </section>
  );
};
export default GameBoy;
