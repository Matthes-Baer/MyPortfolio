"use client";

import gsap from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

const BACKGROUND_TILES = () => {
  const first_square_ref: MutableRefObject<null> = useRef<null>(null);

  useEffect(() => {
    gsap.to(first_square_ref.current, {
      opacity: 0.25,
      x: 25,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 3,
    });
  }, []);

  return (
    <div className="-z-50">
      <div
        className="absolute top-[15%] left-[25%] w-[250px] h-[250px] bg-dark_gray_tile opacity-0 rounded-3xl"
        ref={first_square_ref}
      ></div>
    </div>
  );
};

export default BACKGROUND_TILES;
