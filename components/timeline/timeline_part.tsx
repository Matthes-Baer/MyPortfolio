"use client";

import TIMELINE_PART_BACKGROUND from "./timeline_part_background";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FIRST_LEARNINGSTART from "./tiles/first_learningstart";
import { MutableRefObject, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_PART = () => {
  const first_learningstart_ref: MutableRefObject<null> = useRef(null);

  useEffect(() => {
    //! Do this for every scroll animation ref - see below on how to add the ref with the parent div element
    const first_learningstart = first_learningstart_ref.current;

    gsap.fromTo(
      first_learningstart,
      { opacity: 0 },
      {
        opacity: 1,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: first_learningstart,
          start: "-=200px top",
          end: "top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-min-screen">
      <TIMELINE_PART_BACKGROUND />

      <div
        className="bg-[pink] w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-[200px] opacity-0"
        ref={first_learningstart_ref}
      >
        <FIRST_LEARNINGSTART />
      </div>
    </div>
  );
};

export default TIMELINE_PART;
