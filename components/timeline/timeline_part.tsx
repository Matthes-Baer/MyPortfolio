"use client";

import TIMELINE_PART_BACKGROUND from "./timeline_part_background";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FIRST_LEARNINGSTART from "./tiles/first_learningstart";
import { MutableRefObject, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import SECOND_BVH from "./tiles/second_bvh";
import THIRD_FREECODECAMP from "./tiles/third_freecodecamp";
import FOURTH_CODINGAME from "./tiles/fourth_codingame";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_PART: () => JSX.Element = (): JSX.Element => {
  const first_learningstart_ref: MutableRefObject<null> = useRef(null);
  const second_bvh_ref: MutableRefObject<null> = useRef(null);
  const third_freecodecamp_ref: MutableRefObject<null> = useRef(null);
  const fourth_codingame_ref: MutableRefObject<null> = useRef(null);
  const language: string = useParams().lang;

  useEffect(() => {
    const all_refs = [
      first_learningstart_ref.current,
      second_bvh_ref.current,
      third_freecodecamp_ref.current,
      fourth_codingame_ref.current,
    ];

    all_refs.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "-=200px top",
            end: "top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative w-full h-min-screen">
      <TIMELINE_PART_BACKGROUND />
      <div
        className="absolute top-0 left-0 bg-[pink] w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-[200px] opacity-0"
        ref={first_learningstart_ref}
      >
        <FIRST_LEARNINGSTART language={language} />
      </div>

      <div
        className="absolute top-[200px] right-0 bg-[red] w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-[200px] opacity-0"
        ref={second_bvh_ref}
      >
        <SECOND_BVH language={language} />
      </div>

      <div
        className="absolute top-[400px] left-0 bg-[blue] w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-[200px] opacity-0"
        ref={third_freecodecamp_ref}
      >
        <THIRD_FREECODECAMP language={language} />
      </div>

      <div
        className="absolute top-[600px] right-0 bg-[blue] w-full sm:w-6/12 md:w-4/12 lg:w-3/12 h-[200px] opacity-0"
        ref={fourth_codingame_ref}
      >
        <FOURTH_CODINGAME language={language} />
      </div>
    </div>
  );
};

export default TIMELINE_PART;
