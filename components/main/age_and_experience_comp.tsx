"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AGE_AND_EXPERIENCE_COMP = (props: {
  language: RequestCookie | string;
}) => {
  const [current_slide, set_current_slide] = useState<string>("age");
  const age_slide_ref = useRef(null);
  const experience_slide_ref = useRef(null);

  const slide_changer_handler: (a: string) => void = (slide: string): void => {
    if (slide === "age") {
      set_current_slide("experience");
    } else {
      set_current_slide("age");
    }
  };

  const [age, setAge] = useState(
    (new Date().getTime() - new Date("1998-05-03").getTime()) *
      3.1709791983765 *
      10 ** -11
  );

  const [studyStart, setStudyStart] = useState(
    (new Date().getTime() - new Date("2021-10-01").getTime()) *
      3.1709791983765 *
      10 ** -11
  );

  useEffect(() => {
    if (current_slide === "age") {
      gsap.from(age_slide_ref.current, {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    } else if (current_slide === "experience") {
      gsap.from(experience_slide_ref.current, {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    }

    const interval = setInterval(() => {
      setAge(
        (new Date().getTime() - new Date("1998-05-03").getTime()) *
          3.1709791983765 *
          10 ** -11
      );

      setStudyStart(
        (new Date().getTime() - new Date("2021-10-01").getTime()) *
          3.1709791983765 *
          10 ** -11
      );
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [current_slide]);

  return (
    <div className="z-10 bg-basalt_gray_stone">
      <button
        onClick={() => slide_changer_handler(current_slide)}
        className="p-5"
      >
        Change Slide - vielleicht mit Icons für age und experience arbeiten,
        falls das funktioniert? Am besten auch mit zwei Buttons arbeiten, damit
        es klarer ist, das man klicken kann
      </button>
      {current_slide === "age" ? (
        <div className="text-5xl text-center z-10" ref={age_slide_ref}>
          <span>
            {props.language === "de"
              ? "Ich bin ein Frontend-Webentwickler und"
              : "I am a front-end web developer and"}
          </span>

          <div className="inline-flex items-center">
            <div className="w-[300px] flex justify-center">
              {age.toFixed(8)}
            </div>
          </div>
          <span>{props.language === "de" ? "Jahre alt." : "years old."}</span>
        </div>
      ) : (
        <div className="text-5xl text-center z-10" ref={experience_slide_ref}>
          <span>
            {props.language === "de"
              ? "Ich fokussiere mich täglich seit"
              : "I focus on software development every day for"}
          </span>

          <div className="inline-flex items-center">
            <div className="w-[260px] flex justify-center">
              {studyStart.toFixed(8)}
            </div>
          </div>
          <span>
            {props.language === "de"
              ? "Jahren auf Software-Entwicklung."
              : "years."}
          </span>
        </div>
      )}
    </div>
  );
};

export default AGE_AND_EXPERIENCE_COMP;
