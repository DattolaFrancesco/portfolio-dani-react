const GameBoy = () => {
  return (
    <section id="game-boy" className="position-relative">
      <img id="worksDisplayer" src="imgLanding/GAMEBOYOFFICIAL.png" alt="" className="size-custom" />
      <img id="worksPhoto" src="imgLanding/1_Queio.png" alt="" className="position-absolute custom-gameboy-size" />
      <a id="btnUp" className="custom-positionUp position-absolute">
        <img src="imgLanding/su.png" alt="" className="w-100 h-100" />
      </a>
      <a id="btnDown" className="position-absolute custom-positionDown">
        <img src="imgLanding/giu.png" alt="" className="w-100 h-100" />
      </a>
      <a id="btnPush" className="position-absolute custom-push">
        <img src="imgLanding/PUSH.png" alt="" className="w-100 h-100" />
      </a>
    </section>
  );
};
export default GameBoy;
