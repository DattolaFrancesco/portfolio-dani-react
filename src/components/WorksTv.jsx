import { useEffect, useRef } from "react";

const WorksTv = () => {
  const works = [
    "img-works01/1_QUEIO.png",
    "img-works02/1_CHARACTER.png",
    "img-works03/1_LETTERING.png",
    "img-works04/1_VETRINA.JPG",
    "img-works05/1_POPUP.png",
    "img-works06/1_MISC.png",
  ];
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="d-flex overflow-scroll align-items-center vh-100 gap-5">
      {works.map((e, i) => {
        return (
          <div key={i} className="w-custom-tv-works flex-shrink-0">
            <h1>title</h1>
            <img
              src={e}
              alt="foto"
              className="w-100
    "
            />
          </div>
        );
      })}
    </div>
  );
};
export default WorksTv;
