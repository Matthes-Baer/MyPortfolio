"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useEffect, useState } from "react";

const AGE_AND_EXPERIENCE_COMP = (props: {
  language: RequestCookie | string;
}) => {
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
  }, []);

  return (
    <div>
      <div className="text-5xl bg-deep_burgundy text-center">
        <span>
          {props.language === "de"
            ? "Ich bin ein Frontend-Webentwickler und"
            : "I am a front-end web developer and"}
        </span>

        <div className="inline-flex items-center">
          <div className="w-[300px] flex justify-center">{age.toFixed(8)}</div>
        </div>
        <span>{props.language === "de" ? "Jahre alt." : "years old."}</span>
      </div>
      <div className="text-4xl bg-deep_burgundy text-center">
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
    </div>
  );
};

export default AGE_AND_EXPERIENCE_COMP;
