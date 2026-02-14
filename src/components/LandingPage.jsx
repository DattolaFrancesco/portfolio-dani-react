import { useState, useEffect } from "react";
import GameBoy from "./GameBoy";
import Hero from "./Hero";
import Tv from "./Tv";

const LandingPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Hero />
      {window.innerWidth > 576 ? <Tv /> : <GameBoy />}
    </>
  );
};
export default LandingPage;
