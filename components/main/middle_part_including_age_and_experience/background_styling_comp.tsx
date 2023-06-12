"use client";

import gsap from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

const BACKGROUND_STYLING_COMP = () => {
  const upper_moving_part_ref: MutableRefObject<null> = useRef<null>(null);

  useEffect(() => {
    const upper_moving_part = upper_moving_part_ref.current;

    const upper_moving_part_timeline = gsap.timeline({ repeat: -1 });

    upper_moving_part_timeline
      .to(upper_moving_part, { left: "100%", duration: 10, ease: "easeIn" })
      .to(upper_moving_part, { left: "0%", duration: 10, ease: "easeIn" });

    return () => {
      upper_moving_part_timeline.kill();
    };
  }, []);

  return (
    <div>
      <div>
        <div
          className="absolute w-6 h-px"
          style={{
            top: "15%",
            left: "0",
            transform: "translate(0, -85%)",
            boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.6)",
          }}
          ref={upper_moving_part_ref}
        ></div>
        <div
          className="absolute w-full h-px"
          style={{
            top: "15%",
            left: 0,
            transform: "translate(0, -85%)",
            boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.2)",
          }}
        ></div>
      </div>

      <div
        className="absolute w-full h-px"
        style={{
          top: "55%",
          left: 0,
          transform: "translate(0, -45%)",
          boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.2)",
        }}
      ></div>
    </div>
  );
};

export default BACKGROUND_STYLING_COMP;
