import { gsap } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

const IMAGE_BACKGROUND_DOTS = () => {
  const container_ref: MutableRefObject<null> = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline.add(
      gsap.to(container_ref.current, {
        rotate: "360deg",
        duration: 4,
        ease: "linear",
      })
    );
  }, []);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full -z-10 bg-[transparent]"
      ref={container_ref}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-3/4 w-[35px] h-[35px] opacity-60 rounded-full border-2 border-card_yellow shadow"></div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[30px] h-[30px] opacity-60 rounded-full border-2 border-card_yellow shadow"></div>
      <div className="absolute top-1/2 left-1/4 -translate-x-3/4 -translate-y-3/4 w-[25px] h-[25px] opacity-60 rounded-full border-2 border-tree_light_green shadow"></div>
      <div className="absolute top-1/2 left-3/4 -translate-x-1/4 -translate-y-1/4 w-[20px] h-[20px] opacity-60 rounded-full border-2 border-tree_light_green shadow"></div>
    </div>
  );
};

export default IMAGE_BACKGROUND_DOTS;
