"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import TIMELINE_PART_BACKGROUND from "./timeline_part_background";
import FIRST_LEARNINGSTART from "./tiles/first_learningstart";
import SECOND_BVH from "./tiles/second_bvh";
import THIRD_FREECODECAMP from "./tiles/third_freecodecamp";
import FOURTH_CODINGAME from "./tiles/fourth_codingame";
import FIFTH_TECHNICALWRITER from "./tiles/fifth_technicalwriter";
import SIXTH_UDEMY from "./tiles/sixth_udemy";
import SEVENTH_PROJECTS from "./tiles/seventh_projects";
import EIGHT_NEXTGOAL from "./tiles/eigth_nextgoal";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_PART: () => JSX.Element = (): JSX.Element => {
  const first_learningstart_ref: MutableRefObject<null> = useRef(null);
  const second_bvh_ref: MutableRefObject<null> = useRef(null);
  const third_freecodecamp_ref: MutableRefObject<null> = useRef(null);
  const fourth_codingame_ref: MutableRefObject<null> = useRef(null);
  const fifth_technicalwriter_ref: MutableRefObject<null> = useRef(null);
  const sixth_udemy_ref: MutableRefObject<null> = useRef(null);
  const seventh_projects_ref: MutableRefObject<null> = useRef(null);
  const language: string = useParams().lang;

  useEffect(() => {
    const all_refs = [
      first_learningstart_ref.current,
      second_bvh_ref.current,
      third_freecodecamp_ref.current,
      fourth_codingame_ref.current,
      fifth_technicalwriter_ref.current,
      sixth_udemy_ref.current,
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

    gsap.fromTo(
      seventh_projects_ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: seventh_projects_ref.current,
          start: "-=400px top",
          end: "-=250px top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-min-screen">
      <TIMELINE_PART_BACKGROUND />
      <div
        className="ml-0 lg:ml-[5%] p-5 mb-[40px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-b-8 border-b-tree_light_green border-r-8 border-r-tree_light_green z-20"
        ref={first_learningstart_ref}
      >
        <FIRST_LEARNINGSTART language={language} />
      </div>

      <div
        className="ml-0 lg:mr-[5%] ml-auto p-5 mb-[40px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-l-8 border-l-card_yellow border-r-8 border-r-card_yellow z-20"
        ref={second_bvh_ref}
      >
        <SECOND_BVH language={language} />
      </div>

      <div
        className="ml-0 lg:ml-[5%] p-5 mb-[40px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-l-8 border-l-card_yellow border-t-8 border-t-card_yellow z-20"
        ref={third_freecodecamp_ref}
      >
        <THIRD_FREECODECAMP language={language} />
      </div>

      <div
        className="ml-0 lg:mr-[5%] ml-auto p-5 mb-[40px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-b-8 border-b-tree_light_green border-r-8 border-r-tree_light_green z-20"
        ref={fourth_codingame_ref}
      >
        <FOURTH_CODINGAME language={language} />
      </div>

      <div
        className="ml-0 lg:ml-[5%] p-5 mb-[40px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-t-8 border-t-tree_light_green border-b-8 border-b-tree_light_green z-20"
        ref={fifth_technicalwriter_ref}
      >
        <FIFTH_TECHNICALWRITER language={language} />
      </div>

      <div
        className="ml-0 lg:mr-[5%] ml-auto p-5 mb-[40px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-l-8 border-l-card_yellow border-b-8 border-b-card_yellow z-20"
        ref={sixth_udemy_ref}
      >
        <SIXTH_UDEMY language={language} />
      </div>

      <div
        className="ml-0 lg:ml-[5%] p-5 mb-[250px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 opacity-0 border-l-8 border-l-tree_light_green border-r-8 border-r-tree_light_green z-20"
        ref={seventh_projects_ref}
      >
        <SEVENTH_PROJECTS language={language} />
      </div>
      <div className="mx-auto p-5 mb-[50px] bg-dark_gray_stone rounded shadow text-[white] text-justify w-full md:w-10/12 lg:w-8/12 xl:w-6/12 border-l-8 border-l-tree_light_green border-r-8 border-r-tree_light_green z-20">
        <EIGHT_NEXTGOAL language={language} />
      </div>
    </div>
  );
};

export default TIMELINE_PART;
